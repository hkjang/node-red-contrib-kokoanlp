kokoanlp NodeRED Node
=====================

## Wrapper kakaonlp
- https://github.com/Astro36/kokoa


Install
-------

`npm install node-red-contrib-kokoanlp`

Usage
-----

Expects a <b>msg.payload</b> with string

## parameter example

```javascript
//msg.api = 'words';
//msg.api = 'keywords';
//msg.api = 'keysentences';
//msg.api = 'chunks';
//msg.api = 'morphs';
//msg.api = 'spacing';

msg.payload = '태평양 전쟁 개전 당시 일본 해군의 전략은 외곽 방어망 곳곳에 배치된 지상비행장이 방어의 근거지가 되고 유사시 적을 방어선 가까이 끌어들이는 동안 항공기를 집결하여 격퇴하는 것이었다';
return msg;
```

## response
```json
["태평양","전쟁","당시","일본","해군","전략","외곽","방어","곳곳에","배치","지상","방어","근거","되고","유사","적을","방어","가까이","끌어","동안","항공","것이"]
```

## sample flow

Flows can be imported and exported from the editor using their JSON format, making it very easy to share flows with others.

- Importing flows - pasting in the flow JSON directly
- Menu - Import - Clipboard - Ctrl+v - Import button 

```json
[{"id":"cb7fc295.a48d9","type":"inject","z":"2e2285a8.e9a9aa","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":130,"y":100,"wires":[["7379a09f.d9683"]]},{"id":"f7a00cb5.fb36d","type":"debug","z":"2e2285a8.e9a9aa","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":750,"y":100,"wires":[]},{"id":"7379a09f.d9683","type":"function","z":"2e2285a8.e9a9aa","name":"","func":"// msg.api = 'words';\n// msg.api = 'keywords';\n// msg.api = 'keysentences';\n// msg.api = 'chunks';\n// msg.api = 'morphs';\n// msg.api = 'spacing';\n\nmsg.payload = '태평양 전쟁 개전 당시 일본 해군의 전략은 외곽 방어망 곳곳에 배치된 지상비행장이 방어의 근거지가 되고 유사시 적을 방어선 가까이 끌어들이는 동안 항공기를 집결하여 격퇴하는 것이었다';\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":300,"y":100,"wires":[["51628e6a.e205c"]]},{"id":"51628e6a.e205c","type":"kokoanlp","z":"2e2285a8.e9a9aa","name":"sentence to words","x":520,"y":100,"wires":[["f7a00cb5.fb36d"]]}]
```
