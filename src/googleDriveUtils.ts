
import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const TOKEN_PATH = path.join(__dirname, '../local_assets/token.json');
const CREDENTIALS_PATH = path.join(__dirname, '../local_assets/credentials.json');

async function authorize() {
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    if (fs.existsSync(TOKEN_PATH)) {
        const token = fs.readFileSync(TOKEN_PATH, 'utf-8');
        oAuth2Client.setCredentials(JSON.parse(token));
    } else {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        const code = await getCodeFromUser();
        const token = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(token.tokens);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token.tokens));
    }

    return oAuth2Client;
}

function getCodeFromUser(): Promise<string> {
    return new Promise((resolve) => {
        console.log('Enter the code from that page here: ');
        process.stdin.on('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

async function downloadFile(drive: any, fileId: string): Promise<string> {
    const res = await drive.files.get(
        { fileId, alt: 'media' },
        { responseType: 'stream' }
    );

    return new Promise((resolve, reject) => {
        let data = '';
        res.data.on('data', (chunk: any) => {
            data += chunk;
        });
        res.data.on('end', () => {
            resolve(data);
        });
        res.data.on('error', (err: any) => {
            reject(err);
        });
    });
}

export { authorize, getCodeFromUser, downloadFile };
