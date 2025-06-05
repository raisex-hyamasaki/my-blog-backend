// backend\config\plugins.ts
const frontend = env('FRONTEND_URL', 'http://localhost:3000');

module.exports = ({ env }) => ({
  i18n: true,
  'strapi-plugin-ja-pack': {
    enabled: true,
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::article.article',
          draft: {
            url: `${frontend}/api/preview?type=article&slug={slug}`
          },
          published: {
            url: `${frontend}/articles/{slug}`
          }
        }
      ]
    }
  }
});


