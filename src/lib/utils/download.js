export function downloadFile(url) {
	return new Promise((resolve, reject) => {
		const filename = url.split('/').pop();
		
		// Verify it's an exe file
		if (!filename.toLowerCase().endsWith('.exe')) {
			reject(new Error('Invalid file format. Only .exe files are supported.'));
			return;
		}

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				
				// Verify content type
				const contentType = response.headers.get('content-type');
				if (contentType && !contentType.includes('application/x-msdownload') && 
					!contentType.includes('application/octet-stream')) {
					throw new Error('Invalid file type');
				}
				
				return response.blob();
			})
			.then((blob) => {
				// Create blob with correct MIME type
				const exeBlob = new Blob([blob], { type: 'application/x-msdownload' });
				const url = window.URL.createObjectURL(exeBlob);
				
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = filename;
				
				document.body.appendChild(a);
				a.click();
				
				// Cleanup
				setTimeout(() => {
					window.URL.revokeObjectURL(url);
					document.body.removeChild(a);
				}, 100);
				
				resolve();
			})
			.catch((error) => {
				console.error('Download failed:', error);
				reject(error);
			});
	});
}