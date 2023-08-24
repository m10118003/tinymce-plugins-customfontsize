tinymce.init({
    selector: '#mytextarea',
    // ...
    setup: function(editor) {
        // 自定義文字大小, custom font size
        let customFontSizeButton;
        editor.addButton("customfontsize", {
            text: "12px",
            icon: false,
            style: "width: 100px", // 設定按鈕寬度, set widh for button
            onPostRender: function() {
                customFontSizeButton = this; // 保存按鈕實例, save the instance button
            },
            onclick: function() {
                editor.windowManager.open({
                    title: editor.translate("Set Font Size"), // editor.translate() 使用 tinymce 本身的 i18n, using tinymce i18n itself
                    body: [
                        {
                            type: "textbox",
                            name: "fontsize",
                            label: editor.translate("Font Size"), // editor.translate() 使用 tinymce 本身的 i18n, using tinymce i18n itself
                            value: "12px"
                        }
                    ],
                    onsubmit: function(e) {
                        let fontSize = e.data.fontsize.trim();

                        // 如果輸入為空或不包含數字，設置一個預設值
                        const matches = fontSize.match(/\d+/g); // 獲取所有數字組合
                        if (!fontSize || !matches || matches.length !== 1) {
                            fontSize = "12px";
                        } else {
                            // 只保留第一組數字, 並確保以 px 結尾
                            fontSize = matches[0] + "px";

                            // 移除不是數字的字符並確保以 "px" 結尾
                            // fontSize = fontSize.replace(/[^\d]/g, '') + 'px';

                            // 確保以 "px" 結尾
                            // fontSize += 'px';
                        }

                        // 檢查是否已經包含'px'，如果沒有則加上
                        if (!fontSize.toLowerCase().endsWith("px")) {
                            fontSize += "px";
                        }

                        // 轉換字體大小到整數
                        const numericSize = parseInt(fontSize, 10);

                        // 如果字體大小小於12px，則將其設定為12px
                        if (numericSize < 12) {
                            fontSize = "12px";
                        }

                        // 更新自定義的字體大小命令
                        editor.formatter.register("customfontsize", {
                            // inline: 'span',
                            block: "p",
                            styles: { fontSize: "%value" }
                        });
                        editor.formatter.apply("customfontsize", {
                            value: fontSize
                        });
                        // 更新按鈕文字
                        if (customFontSizeButton) {
                            customFontSizeButton.text(fontSize);
                        }
                    }
                });
            }
        });
    }
});
