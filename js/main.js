import { renderTemplate } from './templates.js';
import { getPostsAsync } from './webSocket.js';
import './uploadForm.js';

getPostsAsync(renderTemplate);
