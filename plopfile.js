module.exports = function(plop) {
  plop.setGenerator("test", {
    description: "generate a test",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name ?"
      },
      {
        type: "input",
        name: "description",
        message: "description ?"
      }
    ],
    actions() {
      const name = "{{name}}";
      const description = "{{description}}";
      return [
        {
          type: "add", //类型创建模板文件
          path: `src/views/${name}/index.vue`, //文件创建路径
          templateFile: "plop-templates/view/index.hbs", //文件模板
          data: { name, description }
        }
      ];
    }
  });
};
