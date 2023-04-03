import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function main() {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is earth?",
    max_tokens: 2048,
    temperature: 0.2,
  });
  console.log(res.data.choices[0].text);
}

main();
