OPENAI_API_KEY（必需的）
你的 openai api 密钥。

CODE（选修的）
访问密码，以逗号分隔。

BASE_URL（选修的）
默认：https://api.openai.com

例子：http://your-openai-proxy.com

覆盖 openai api 请求基本 url。

OPENAI_ORG_ID（选修的）
指定 OpenAI 组织 ID。

HIDE_USER_API_KEY（选修的）
默认值：空

如果您不希望用户输入自己的 API 密钥，请将此环境变量设置为 1。

发展
简体中文 > 如何进行二次开发

OPENAI_API_KEY=<your api key here>
地方发展
# 1. install nodejs and yarn first
# 2. config local env vars in `.env.local`
# 3. run
yarn install
yarn dev
部署
Docker（推荐）
docker pull yidadaa/chatgpt-next-web

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="your-password" \
   yidadaa/chatgpt-next-web
您可以在代理后面启动服务：

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="your-password" \
   -e PROXY_URL="http://localhost:7890" \
   yidadaa/chatgpt-next-web
设置了model-config.tsx settings.tsx 
sidebar.tsx  为左边上下按钮