const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
export const fetchProperties = async () => {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch properties", res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// fetch a single property
export const fetchProperty = async (id) => {
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("failed to fetch property", res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
