# hightcharts-gpt-chatbot

## how to make it
- src/services/openai.js 를 통해 통신, 리스트 출력
```javascript
const run = async () => {
  data.loads = true;
  const client = createClient(data.key);
  try {
    data.generatedMessages.push(new Message(ROLE_USER, data.userMessage));
    data.userMessage = '';
    const result = await createCompletion(client)({
      messages: generatedMessages.value,
    });
    const { choices } = result.data;
    const [choice] = choices;
    const { message } = choice;
    data.generatedMessages.push(new Message(ROLE_ASSISTANT, message.content));
    await new Promise((resolve) => setTimeout(resolve, data.delaySeconds * 100));
    data.loads = false;
  } catch (err) {
    data.error = err?.response?.data?.error?.message || err.message;
    data.loads = false;
  }
};
```

## insatll
- highcharts
> refer [1](https://smithalan92.github.io/vue3-highcharts/)
, [2](https://github.com/smithalan92/vue3-highcharts/blob/master/demo/src/main.js)
, [3](https://www.npmjs.com/package/@adrianbrs/vue3-highcharts)
```shell
$ npm i --save vue3-highcharts
$ npm install -S highcharts # when you get error - refer the git issue #1
```

- markdown render
> refer [1](https://morioh.com/p/2d2ee277892c)
, [2](https://janguillermo.github.io/vue3-markdown-it/?ref=morioh.com&utm_source=morioh.com)
```shell
$ npm install vue3-markdown-it
```

- vuex
> refer [1](https://stackblitz.com/edit/vue3-vuex-mapgetters-namespaced-module?file=src%2Fmain.ts)
```shell
$ npm install vuex
```

## run
```shell
$ npm install
$ npm run dev
```

## build
```shell
$ npm run build # making dist/ folder in Vue project -> git push
```

### References
- vue3 global settings
> refer [1](https://kyounghwan01.github.io/blog/Vue/vue3/global-state/#composition-api%E1%84%85%E1%85%A9-%E1%84%80%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%87%E1%85%A5%E1%86%AF-%E1%84%87%E1%85%A7%E1%86%AB%E1%84%89%E1%85%AE-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
, [2](https://kkh0977.tistory.com/1954)
- global component/dynamic component
> refer [1](https://velog.io/@byunghun-jake/Vue-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%A0%84%EC%97%AD%EB%93%B1%EB%A1%9D)
, [2](https://empty-castle.tistory.com/3)
, [3](https://mine-it-record.tistory.com/350)
- gpt
> refer [1](https://www.visionboy.me/815)
, [2](https://velog.io/@g_c0916/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-chat-GPT-API)
, [3](https://re-hwi.tistory.com/121)
, [4](https://velog.io/@bk87/GPT%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-QnA-%EC%B1%97%EB%B4%87-%EB%A7%8C%EB%93%A4%EA%B8%B0)
, [5](https://welcometodannas.tistory.com/69)
, [6](https://donny00.tistory.com/33)
, [7](https://github.com/tmdgusya/study-english-with-gpt)
, [8](https://techbukket.com/blog/chatgpt-api-javascript)
, [9](https://passwd.tistory.com/entry/Python-OpenAI-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
, [10](https://passwd.tistory.com/entry/Python-OpenAI-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- regex
> [refer](https://dmstjq92.medium.com/%EC%A0%95%EA%B7%9C%EC%8B%9D-%EC%A4%84%EB%B0%94%EA%BF%88-%ED%8F%AC%ED%95%A8-%EB%AA%A8%EB%93%A0-%EB%AC%B8%EC%9E%90-%EC%9D%BC%EC%B9%98-js%EC%86%8D%EC%84%B1%EA%B2%80%EC%83%89-%ED%85%8C%ED%81%AC%EB%8B%89-f70c1432a33f)
- vue3 vuex | setup | global variable
> refer [1](https://kkh0977.tistory.com/1955)
,[2](https://kyounghwan01.github.io/Vue/vue3/composition-api-vuex/#%EC%A0%84%EC%97%AD-action-mutation-%EC%8B%A4%ED%96%89)
,[3](https://stackblitz.com/edit/vue3-vuex-mapgetters-namespaced-module?file=src%2FApp.vue)
,[4](https://kyounghwan01.github.io/blog/Vue/vue3/global-state/#composition-api%E1%84%85%E1%85%A9-%E1%84%80%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%87%E1%85%A5%E1%86%AF-%E1%84%87%E1%85%A7%E1%86%AB%E1%84%89%E1%85%AE-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
,[5](https://vuex.vuejs.org/guide/modules.html#module-reuse)
,[6](https://velog.io/@rachaen/Vuex4-modules-Vue3-store-%EB%AA%A8%EB%93%88%ED%99%94-%EC%8B%9C%ED%82%A4%EA%B8%B0)
,[7](https://velog.io/@oneook/Vuex%EC%99%80-%ED%95%A8%EA%BB%98-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC)
, [8](https://shifeed.tistory.com/entry/vue2-vue3-created-setup-%EB%B9%84%EA%B5%90)