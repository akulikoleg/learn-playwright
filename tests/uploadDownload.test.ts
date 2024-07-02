import {test} from "@playwright/test"

// test("Download files", async ({page}) => {

//     await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
//     await page.type('#textbox', 'Downloading info file generating value');
//     await page.click('#create'); // generate file btn
//     //await page.click("#link-to-download");
//     const [download] = await Promise.all([
//         page.waitForEvent('download'),
//         page.click("#link-to-download")
//     ]);

//     const fileName = download.suggestedFilename();
//     await download.saveAs(fileName);

//     // const path =  await download.path();
//     // console.log(path);
    


// })


test("Upload files", async ({page}) => {

    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
  //  await page.setInputFiles('//input[@type="file"]',   ["./uploadItems/first.png", "./uploadItems/sec.png"]);// first option
    const [uploadFiles] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('//input[@type="file"]')
      
    ])

    const isMultiple = uploadFiles.isMultiple();
    console.log('Is multuple: ' + isMultiple);
    uploadFiles.setFiles( ["./uploadItems/first.png", "./uploadItems/sec.png"] );
    await page.waitForTimeout(3000)

})