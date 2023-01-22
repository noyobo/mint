import axios from 'axios';

export const getPage = async (subdomain: string, path: string) => {
  const { data, status } = await axios.get(
    `${process.env.API_ENDPOINT}/api/v2/internal/deployment/${subdomain}/static-props`,
    {
      params: {
        path,
        basePath: process.env.BASE_PATH,
      },
      headers: { Authorization: `Bearer ${process.env.ADMIN_TOKEN}` },
    }
  );
  return { data, status };
};
