const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Rakshit&g=rakshit-gen&x=sisodiarakshit&l=rakshit-sisodiya&i=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3069282.jpg&p=https%3A%2F%2Frakshit-portfolio-one.vercel.app%2F&z=8bc3d";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
