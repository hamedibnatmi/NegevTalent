export const getTweets = async () => {
    return await fetch("https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets?apikey=sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih");
}


export const postTweet = async ({ content, date, userName }) => {
    const response = await fetch(
        "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih",
                "Authorization": "Bearer sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih",
                "Prefer": "return=representation"
            },
            body: JSON.stringify({
                content,
                date,
                userName
            })
        }
    )

    if (!response.ok) throw new Error("Failed to add tweet");

    const data = await response.json();
    return data;
}