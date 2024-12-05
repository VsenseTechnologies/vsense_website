import { json } from '@sveltejs/kit';
import { isValidFileType } from '$lib/utils/download.js';

export async function GET({ url }) {
	try {
		const fileUrl = url.searchParams.get('file');
		
		if (!fileUrl) {
			return json({ error: 'No file URL provided' }, { status: 400 });
		}

		const filename = fileUrl.split('/').pop();
		
		if (!isValidFileType(filename)) {
			return json({ error: 'Invalid file type' }, { status: 400 });
		}

		// Set appropriate headers for executable download
		const headers = new Headers({
			'Content-Type': 'application/octet-stream',
			'Content-Disposition': `attachment; filename="${filename}"`,
			'Cache-Control': 'no-cache'
		});

		return new Response(fileUrl, { headers });
	} catch (error) {
		console.error('Download error:', error);
		return json({ error: 'Download failed' }, { status: 500 });
	}
}