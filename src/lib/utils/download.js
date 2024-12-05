export async function downloadFile(url) {
	try {
		const filename = url.split('/').pop();
		
		// Validate file extension
		if (!filename.toLowerCase().endsWith('.exe')) {
			throw new Error('Invalid file format. Only .exe files are supported.');
		}

		// Fetch the file with proper headers
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/octet-stream',
				'Content-Disposition': `attachment; filename="${filename}"`
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Get the blob with correct MIME type
		const blob = await response.blob();
		const exeBlob = new Blob([blob], { 
			type: 'application/vnd.microsoft.portable-executable' 
		});

		// Create download link
		const downloadUrl = window.URL.createObjectURL(exeBlob);
		const link = document.createElement('a');
		link.href = downloadUrl;
		link.download = filename;
		link.style.display = 'none';

		// Trigger download
		document.body.appendChild(link);
		link.click();

		// Cleanup
		setTimeout(() => {
			window.URL.revokeObjectURL(downloadUrl);
			document.body.removeChild(link);
		}, 100);

		return true;
	} catch (error) {
		console.error('Download failed:', error);
		throw new Error(error.message || 'Failed to download file');
	}
}

// Helper function to validate file type
export function isValidFileType(filename) {
	return filename.toLowerCase().endsWith('.exe');
}