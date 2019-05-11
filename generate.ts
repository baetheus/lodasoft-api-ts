import { fromJSON, generate, serializeTypescript } from '@nll/swagger-codegen-ts';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import { join } from 'path';

const TEMP_FILE_NAME = join(__dirname, 'spec.json');

const API_URL = process.env.API_URL || 'http://devapi.lodasoft.com/swagger/docs/v1';
const LIB_PATH = join(__dirname, 'temp');

const makeClient = async (url: string, path: string) => {
	const swagger = await fetch(url).then(r => r.text());
	writeFileSync(TEMP_FILE_NAME, swagger);
	return generate({
		pathsToSpec: [TEMP_FILE_NAME],
		out: path,
		fileReader: fromJSON,
		serialize: serializeTypescript,
	});
};

const run = async () => {
	await makeClient(API_URL, LIB_PATH);
};

run()
	.then(_ => console.log('Done Building Library'))
	.catch(e => console.error('Build of library failed', e));
