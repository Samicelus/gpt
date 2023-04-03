import Koa from "koa";
import Router from "koa-router";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.APP_KEY,
});
const openai = new OpenAIApi(configuration);

const app = new Koa();
const router = new Router();

router.get("/chat", async (ctx, next) => {
  const { prompt } = ctx.query;
  console.log(prompt);
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 0.2,
  });
  ctx.body = res.data.choices;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log("server is running at 3000");
});
