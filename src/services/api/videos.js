import data from '../../utils/database/videos.json';
import linkspdf from '../../utils/database/linkspdf.json';

export async function getListVideosApi() {
  try {
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getLinkPdfApi(module) {
  try {
    const data = await linkspdf.filter(links => links.module === module);
    return data;
  } catch (error) {
    throw error;
  }
}
