# 貢獻

### 撩妹話術資料

資料格式請參考 [src/data.js](https://github.com/EddieWen-Taiwan/flirt-cli/blob/master/src/data.js)。每句話以一個包含 `text` & `self` 屬性的物件表示，數則話語構成一個陣列型態的對話。如下所示：

```javascript
[
	{ text: '下週四晚上要不要去看個電影？', self: true },
	{ text: '我先去洗澡，掰', self: false },
]
```

- text: 對話內容
- self: 是否為自己所說的話。如是，則以「我：」呈現，反之，則為「你：」。

最後，上方範例則會以下列方式呈現：

```bash
我：「下週四晚上要不要去看個電影？」
你：「我先去洗澡，掰」
```
