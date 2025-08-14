const ZAI = require('z-ai-web-dev-sdk');

async function analyzeDesign() {
  try {
    const zai = await ZAI.create();

    // Search for information about the sword theme design
    const searchResult = await zai.functions.invoke("web_search", {
      query: "sword fitness gym theme design themeim.com demo",
      num: 10
    });

    console.log('Design Analysis Results:');
    console.log(JSON.stringify(searchResult, null, 2));

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

analyzeDesign();