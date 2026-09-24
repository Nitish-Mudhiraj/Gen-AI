const messages = [];

async function test(message) {
    console.log("========== AI SERVICE ==========");

    // Add user's message to history
    messages.push({
        role: "user",
        content: message
    });

    console.log("MESSAGES:", messages);

    const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
            body: JSON.stringify({
                model: "inclusionai/ling-3.0-flash-vl:free",
                messages: messages
            }),
        }
    );

    const data = await response.json();

    console.log("FULL RESPONSE:", data);

    if (!response.ok || !data.choices) {
        throw new Error(
            data.error?.message || "AI request failed"
        );
    }

    const aiMessage = data.choices[0].message.content;

    // Add AI response to history
    messages.push({
        role: "assistant",
        content: aiMessage
    });

    return aiMessage;
}

module.exports = {
    test
};
async function generateTitle(message) {
    const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
            body: JSON.stringify({
                model: "inclusionai/ling-3.0-flash-vl",
                messages: [
                    {
                        role: "user",
                        content: `Create a short title for this user's question.
Return only the title, maximum 5 words.

Question: ${message}`
                    }
                ]
            })
        }
    );

    const data = await response.json();

    if (!response.ok || !data.choices) {
        throw new Error(data.error?.message || "Title generation failed");
    }

    return data.choices[0].message.content.trim();
}


module.exports = {
    test,
    generateTitle
};