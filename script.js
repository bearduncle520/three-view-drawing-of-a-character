var PLATFORMS = {
  '阿里百炼': {
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    models: [
      {id:'qwen3.7-plus', name:'qwen3.7-plus', label:'Qwen3.7-Plus（多模态智能体，2026.06）', free:'新用户赠百元免费额度', price:'输入 0.002 元/千tokens，输出 0.008 元/千tokens'},
      {id:'qwen3.6-plus', name:'qwen3.6-plus', label:'Qwen3.6-Plus（旗舰视觉，1M上下文，2026.07）', free:'新用户赠百元免费额度', price:'输入 0.004 元/千tokens，输出 0.012 元/千tokens'},
      {id:'qwen3.6-flash', name:'qwen3.6-flash', label:'Qwen3.6-Flash（轻量视觉，高性价比，2026.07）', free:'新用户赠百元免费额度', price:'输入 0.0005 元/千tokens，输出 0.002 元/千tokens'},
      {id:'qwen-vl-max', name:'qwen-vl-max', label:'Qwen-VL-Max（旗舰视觉模型，2025.08）', free:'新用户赠百元免费额度', price:'输入 0.0035 元/千tokens，输出 0.014 元/千tokens'},
      {id:'qwen-vl-plus', name:'qwen-vl-plus', label:'Qwen-VL-Plus（增强视觉，2025.03）', free:'新用户赠百元免费额度', price:'输入 0.0015 元/千tokens，输出 0.0045 元/千tokens'},
      {id:'qwen-vl-flash', name:'qwen-vl-flash', label:'Qwen-VL-Flash（快速视觉，2025.01）', free:'新用户赠百元免费额度', price:'输入 0.0005 元/千tokens，输出 0.002 元/千tokens'},
      {id:'qwen3-vl-32b', name:'qwen3-vl-32b-instruct', label:'Qwen3-VL-32B-Instruct（2025.05）', free:'新用户赠百元免费额度', price:'输入 0.001 元/千tokens，输出 0.004 元/千tokens'}
    ]
  },
  'Kimi': {
    endpoint: 'https://api.moonshot.ai/v1',
    models: [
      {id:'kimi-k3', name:'kimi-k3', label:'Kimi-K3（旗舰多模态，2.8T参数，1M上下文，2026.07）', free:'新用户赠 500 万 tokens', price:'输入 8 元/百万tokens，输出 32 元/百万tokens'},
      {id:'kimi-k2.5', name:'kimi-k2.5', label:'Kimi-K2.5（多模态视觉旗舰，2026.01）', free:'新用户赠 500 万 tokens', price:'输入 2 元/百万tokens，输出 12 元/百万tokens'}
    ]
  },
  '腾讯混元': {
    endpoint: 'https://api.hunyuan.cloud.tencent.com/v1',
    models: [
      {id:'hunyuan-vision', name:'hunyuan-vision', label:'Hunyuan-Vision（视觉理解，2025.10）', free:'每月赠 100 万 tokens', price:'输入 0.003 元/千tokens，输出 0.009 元/千tokens'},
      {id:'hunyuan-vision-1.5-thinking', name:'hunyuan-vision-1.5-thinking', label:'Hunyuan-Vision-1.5-Thinking（视觉推理增强，2025.10）', free:'每月赠 100 万 tokens', price:'输入 0.005 元/千tokens，输出 0.015 元/千tokens'}
    ]
  },
  '豆包': {
    endpoint: 'https://ark.cn-beijing.volces.com/api/v3',
    models: [
      {id:'doubao-seed-2.1-pro', name:'doubao-seed-2.1-pro', label:'Doubao Seed 2.1 Pro（旗舰多模态，2026.06）', free:'新用户赠 50 万 tokens', price:'输入 0.005 元/千tokens，输出 0.02 元/千tokens'},
      {id:'doubao-seed-2.1-turbo', name:'doubao-seed-2.1-turbo', label:'Doubao Seed 2.1 Turbo（快速多模态，2026.06）', free:'新用户赠 50 万 tokens', price:'输入 0.002 元/千tokens，输出 0.008 元/千tokens'},
      {id:'doubao-1.5-pro', name:'doubao-1-5-pro-32k-250115', label:'Doubao-1.5-Pro-32k（多模态视觉，2025.01）', free:'新用户赠 50 万 tokens', price:'输入 0.0008 元/千tokens，输出 0.002 元/千tokens'},
      {id:'doubao-vision-pro', name:'doubao-vision-pro-32k', label:'Doubao-Vision-Pro-32k（视觉理解专用）', free:'新用户赠 50 万 tokens', price:'输入 0.003 元/千tokens，输出 0.009 元/千tokens'}
    ]
  },
  '智谱': {
    endpoint: 'https://open.bigmodel.cn/api/paas/v4',
    models: [
      {id:'glm-4v-flash', name:'glm-4v-flash', label:'GLM-4V-Flash（免费视觉模型）', free:'永久免费', price:'免费'},
      {id:'glm-4v-plus', name:'glm-4v-plus', label:'GLM-4V-Plus（多模态视觉，2025.07）', free:'新用户赠 500 万 tokens', price:'输入 0.005 元/千tokens，输出 0.01 元/千tokens'},
      {id:'glm-4v-plus-0111', name:'glm-4v-plus-0111', label:'GLM-4V-Plus-0111（视觉增强版，2025.01）', free:'新用户赠 500 万 tokens', price:'输入 0.008 元/千tokens，输出 0.02 元/千tokens'},
      {id:'glm-4.6v', name:'glm-4.6v', label:'GLM-4.6V（多模态基座，2025.12）', free:'新用户赠 500 万 tokens', price:'输入 1 元/百万tokens，输出 4 元/百万tokens'},
      {id:'glm-4.1v-thinking', name:'glm-4.1v-thinking', label:'GLM-4.1V-Thinking（视觉推理增强）', free:'新用户赠 500 万 tokens', price:'输入 0.002 元/千tokens，输出 0.008 元/千tokens'},
      {id:'glm-5v-turbo', name:'glm-5v-turbo', label:'GLM-5V-Turbo（多模态 Agent，2026.04）', free:'新用户赠 500 万 tokens', price:'输入 5 元/百万tokens，输出 22 元/百万tokens'}
    ]
  },
  'DeepSeek': {
    endpoint: 'https://api.deepseek.com/v1',
    models: [
      {id:'deepseek-chat', name:'deepseek-chat', label:'DeepSeek Chat（V4 多模态，支持图片）', free:'新用户赠 500 万 tokens', price:'输入 0.5 元/百万tokens，输出 2 元/百万tokens'}
    ]
  },
  '硅基流动': {
    endpoint: 'https://api.siliconflow.cn/v1',
    models: [
      {id:'deepseek-ai/deepseek-vl2', name:'deepseek-ai/deepseek-vl2', label:'DeepSeek-VL2（多模态视觉理解）', free:'新用户赠 14 元余额', price:'输入 $0.13/M tokens，输出 $0.42/M tokens'},
      {id:'Qwen/Qwen2-VL-72B-Instruct', name:'Qwen/Qwen2-VL-72B-Instruct', label:'Qwen2-VL-72B-Instruct（旗舰视觉）', free:'新用户赠 14 元余额', price:'输入 $0.35/M tokens，输出 $0.35/M tokens'},
      {id:'Qwen/Qwen2-VL-7B-Instruct', name:'Qwen/Qwen2-VL-7B-Instruct', label:'Qwen2-VL-7B-Instruct（轻量视觉）', free:'新用户赠 14 元余额', price:'输入 $0.08/M tokens，输出 $0.08/M tokens'},
      {id:'OpenGVLab/InternVL2-76B', name:'OpenGVLab/InternVL2-76B', label:'InternVL2-76B（上海AI Lab，强视觉理解）', free:'新用户赠 14 元余额', price:'输入 $0.28/M tokens，输出 $0.28/M tokens'},
      {id:'OpenGVLab/InternVL2-40B', name:'OpenGVLab/InternVL2-40B', label:'InternVL2-40B（中等规模视觉模型）', free:'新用户赠 14 元余额', price:'输入 $0.18/M tokens，输出 $0.18/M tokens'}
    ]
  },
  '讯飞星辰': {
    endpoint: 'https://maas-api.xfyun.cn/v1',
    models: [
      {id:'spark-x2', name:'spark-x2', label:'Spark X2（星火旗舰，多模态理解）', free:'新用户赠 100 万 tokens', price:'输入 3 元/百万tokens，输出 3 元/百万tokens'},
      {id:'spark-x2-flash', name:'spark-x2-flash', label:'Spark X2 Flash（轻量快速，多模态）', free:'新用户赠 100 万 tokens', price:'输入 1 元/百万tokens，输出 2 元/百万tokens'}
    ]
  }
};

var currentImageData = null;

// ===== localStorage 持久化 API 配置（普通刷新/关闭标签页均保留，仅清空按钮清除） =====
function saveApiConfig(){
  try{
    var data = {
      key: document.getElementById('apikey').value,
      ep: document.getElementById('apiendpoint').value,
      platform: document.getElementById('pselect').value,
      model: document.getElementById('modelselect').value
    };
    // 同时保存各平台 API Key 映射
    if(window._apiKeys) data.apiKeys = window._apiKeys;
    var str = JSON.stringify(data);
    localStorage.setItem('lx_api_config', str);
    // window.name 作为硬刷新回退（强制刷新不清除）
    try{window.name='lx_'+str}catch(e){}
  }catch(e){}
}
function restoreApiConfig(){
  try{
    var raw = localStorage.getItem('lx_api_config');
    // 如果 localStorage 被硬刷新清除，从 window.name 恢复
    if(!raw){
      try{
        var nn = window.name;
        if(nn && nn.indexOf('lx_')===0) raw = nn.slice(3);
      }catch(e){}
    }
    if(!raw) return;
    var data = JSON.parse(raw);
    // 恢复各平台 API Key 映射
    if(data.apiKeys) window._apiKeys = data.apiKeys;
    if(data.platform){
      document.getElementById('pselect').value = data.platform;
      onPlatformChange();
      if(data.model){
        document.getElementById('modelselect').value = data.model;
        onModelChange();
      }
    }
    if(data.ep){
      document.getElementById('apiendpoint').value = data.ep;
      document.getElementById('apiendpoint').readOnly = false;
    }
    if(data.key){
      document.getElementById('apikey').value = data.key;
      onKeyChange();
    }
  }catch(e){}
}

function onPlatformChange(){
  var plat = document.getElementById('pselect').value;
  var prevPlat = document.getElementById('pselect').getAttribute('data-prev') || '';
  // 保存当前 API Key 到旧平台
  if(prevPlat && prevPlat !== plat){
    var oldKey = document.getElementById('apikey').value;
    if(oldKey) window._apiKeys = window._apiKeys || {};
    if(window._apiKeys) window._apiKeys[prevPlat] = oldKey;
  }
  // 清空 API Key 输入
  document.getElementById('apikey').value = '';
  document.getElementById('apikey').type = 'password';
  document.getElementById('keyeye').innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  // 如果新平台有保存的 Key，自动恢复
  if(window._apiKeys && window._apiKeys[plat]){
    document.getElementById('apikey').value = window._apiKeys[plat];
    onKeyChange();
  } else {
    setConnState('wait');
  }
  document.getElementById('pselect').setAttribute('data-prev', plat);
  var modelSel = document.getElementById('modelselect');
  var modelGroup = document.getElementById('model-select-group');
  var modelInfo = document.getElementById('modelinfo');
  modelInfo.style.display = 'none';
  if(!plat || plat === '自定义'){
    modelGroup.style.display = 'none';
    document.getElementById('apiendpoint').value = '';
    document.getElementById('apiendpoint').placeholder = plat === '自定义' ? '请输入自定义 API 端点' : '请先选择平台';
    document.getElementById('apiendpoint').readOnly = false;
    if(plat === '自定义') document.getElementById('apiendpoint').focus();
    saveApiConfig();
    return;
  }
  modelGroup.style.display = 'block';
  modelSel.innerHTML = '<option value="" disabled selected>请选择模型</option>';
  var pData = PLATFORMS[plat];
  if(pData && pData.models){
    pData.models.forEach(function(m){
      var opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.label;
      modelSel.appendChild(opt);
    });
  }
  document.getElementById('apiendpoint').value = pData ? pData.endpoint : '';
  document.getElementById('apiendpoint').placeholder = '选择模型后自动填充，也可手动修改';
  document.getElementById('apiendpoint').readOnly = false;
  setConnState('wait');
  saveApiConfig();
}

function onModelChange(){
  var plat = document.getElementById('pselect').value;
  var mid = document.getElementById('modelselect').value;
  var modelInfo = document.getElementById('modelinfo');
  if(!plat || !mid || !PLATFORMS[plat]){
    modelInfo.style.display = 'none';
    return;
  }
  var pData = PLATFORMS[plat];
  var mData = null;
  for(var i=0;i<pData.models.length;i++){
    if(pData.models[i].id === mid){ mData = pData.models[i]; break; }
  }
  if(mData){
    document.getElementById('mfree').textContent = mData.free;
    document.getElementById('mprice').textContent = mData.price;
    modelInfo.style.display = 'block';
  }
  setConnState('wait');
  saveApiConfig();
}

(function init(){
  restoreApiConfig();
  // pselect / modelselect 的 onchange 已在 HTML 中定义
  document.getElementById('apiendpoint').addEventListener('input', function(){
    saveApiConfig();
  });
})();

function toggleKey(){
  var inp = document.getElementById('apikey');
  var eye = document.getElementById('keyeye');
  if(inp.type === 'password'){
    inp.type = 'text';
    eye.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>';
  } else {
    inp.type = 'password';
    eye.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  }
}

function onKeyChange(){
  saveApiConfig();
  var key = document.getElementById('apikey').value.trim();
  if(key){
    setConnState('ready');
  } else {
    setConnState('wait');
  }
}

function setConnState(state){
  var btn = document.getElementById('connbtn');
  btn.className = 's-btn ' + state;
  if(state === 'wait'){
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> 等待配置';
  } else if(state === 'ready'){
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 测试连接';
  } else if(state === 'testing'){
    btn.innerHTML = '<svg class="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> 验证中...';
  } else if(state === 'ok'){
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> 连接成功';
  } else if(state === 'fail'){
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 连接失败，点击重试';
  }
}

function onConnBtnClick(){
  var btn = document.getElementById('connbtn');
  if(btn.classList.contains('ready') || btn.classList.contains('fail')){
    testConnection();
  }
}

function getModelName(){
  var plat = document.getElementById('pselect').value;
  var mid = document.getElementById('modelselect').value;
  if(!plat || !mid || !PLATFORMS[plat]) return mid || '';
  var pData = PLATFORMS[plat];
  for(var i=0;i<pData.models.length;i++){
    if(pData.models[i].id === mid) return pData.models[i].name;
  }
  return mid;
}

function clearApiConfig(){
  document.getElementById('apikey').value='';
  document.getElementById('apiendpoint').value='';
  document.getElementById('apiendpoint').placeholder='请先选择平台';
  document.getElementById('pselect').value='';
  document.getElementById('modelselect').innerHTML='<option value="" disabled selected>请先选择平台</option>';
  document.getElementById('model-select-group').style.display='none';
  document.getElementById('modelinfo').style.display='none';
  setConnState('wait');
  window._apiKeys = {};
  try{localStorage.removeItem('lx_api_config');window.name='';}catch(e){}
}

function testConnection(){
  var key = document.getElementById('apikey').value.trim();
  var ep = document.getElementById('apiendpoint').value.trim();
  if(!key){ setConnState('wait'); return; }
  if(!ep){ setConnState('fail'); return; }
  setConnState('testing');
  var start = Date.now();
  var modelName = getModelName();
  fetch(ep+'/chat/completions', {method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+key}, body:'{"model":"'+modelName+'","messages":[{"role":"user","content":"hi"}],"max_tokens":1}'})
    .then(function(r){
      var el = Date.now()-start; if(el<800) setTimeout(function(){setConnState('ok')},800-el); else setConnState('ok');
    })
    .catch(function(){
      var el = Date.now()-start; if(el<800) setTimeout(function(){setConnState('fail')},800-el); else setConnState('fail');
    });
}

// ===== 图片上传与 API 分析 =====
var up = document.getElementById('upload');
var fi = document.getElementById('finp');
up.addEventListener('click',function(){if(!this.classList.contains('ok'))fi.click()});
up.addEventListener('dragover',function(e){e.preventDefault();this.classList.add('drag')});
up.addEventListener('dragleave',function(e){e.preventDefault();this.classList.remove('drag')});
up.addEventListener('drop',function(e){e.preventDefault();this.classList.remove('drag');if(e.dataTransfer.files.length>0)handleFile(e.dataTransfer.files[0])});
fi.addEventListener('change',function(){if(this.files.length>0)handleFile(this.files[0])});

function handleFile(f){
  // 显示预览
  document.getElementById('uempty').style.display='none';
  document.getElementById('uprev').style.display='flex';
  document.getElementById('fname').textContent=f.name;
  document.getElementById('fsize').textContent=(f.size/1024).toFixed(1)+' KB';
  up.classList.add('ok');
  document.getElementById('analysismsg').style.display='none';
  // 禁用生成按钮
  document.getElementById('genbtn').disabled=true;
  // 清空分析结果
  document.getElementById('style').value='';document.getElementById('style').placeholder='AI 分析中...';
  document.getElementById('texture').value='';document.getElementById('texture').placeholder='AI 分析中...';
  document.getElementById('proportion').value='';document.getElementById('proportion').placeholder='AI 分析中...';
  var reader=new FileReader();
  reader.onload=function(e){
    document.getElementById('previmg').src=e.target.result;
    currentImageData=e.target.result;
    // 调用 API 分析
    callApiAnalyze(currentImageData, f);
  };
  reader.readAsDataURL(f);
}

function callApiAnalyze(dataUrl, file){
  var key = document.getElementById('apikey').value.trim();
  var ep = document.getElementById('apiendpoint').value.trim();
  var model = getModelName();

  if(!key || !ep){
    showApiFail('请先配置 API Key 和端点，或选择模型后重试');
    return;
  }

  var body = JSON.stringify({
    model: model,
    messages: [
      {
        role: 'user',
        content: [
          {type:'text', text:'分析这张角色图片的风格、表面质感和人体比例，用JSON格式回复，不要多余文字，格式：{"style":"...","texture":"...","proportion":"..."}'},
          {type:'image_url', image_url:{url: dataUrl}}
        ]
      }
    ],
    max_tokens: 500
  });

  fetch(ep+'/chat/completions', {
    method: 'POST',
    headers: {'Content-Type':'application/json', 'Authorization':'Bearer '+key},
    body: body
  })
  .then(function(r){ return r.json().then(function(j){return {status:r.status,json:j};}); })
  .then(function(resp){
    var data = resp.json;
    // 统一错误处理：兼容各平台错误格式
    if(resp.status >= 400 || data.error || data.code){
      var errMsg = data.error ? (data.error.message||JSON.stringify(data.error))
        : data.message ? data.message
        : data.code ? '错误码 '+data.code+(data.message?' : '+data.message:'')
        : 'HTTP '+resp.status;
      showApiFail('API 错误: '+errMsg);
      return;
    }
    // 统一内容提取：兼容各平台返回结构
    var content = '';
    try{
      if(data.choices && data.choices[0]){
        var c = data.choices[0];
        content = (c.message && c.message.content) || (c.delta && c.delta.content) || c.text || '';
      } else if(data.content){
        content = data.content;
      } else if(data.output && data.output.text){
        content = data.output.text;
      }
      // 尝试从内容中提取 JSON（可能被 markdown 包裹）
      var jsonStr = content.replace(/^```(?:json)?\s*|\s*```$/g, '').trim();
      var parsed = JSON.parse(jsonStr);
      if(parsed.style && parsed.texture && parsed.proportion){
        fillAnalysis(parsed.style, parsed.texture, parsed.proportion);
        return;
      }
    }catch(e){}
    showApiFail('API 返回格式异常，请检查模型是否支持图片分析');
  })
  .catch(function(err){
    showApiFail('网络请求失败，请检查端点地址或网络: '+err.message);
  });
}

function showApiFail(msg){
  msg = msg || 'API 分析无结果，请重新上传';
  document.getElementById('style').placeholder='API 分析失败';
  document.getElementById('texture').placeholder='API 分析失败';
  document.getElementById('proportion').placeholder='API 分析失败';
  document.getElementById('analysismsg').style.display='inline';
  document.getElementById('analysismsg').textContent=msg;
  document.getElementById('genbtn').disabled=true;
}

function fillAnalysis(style, texture, proportion){
  var si=document.getElementById('style'),ti=document.getElementById('texture'),pi=document.getElementById('proportion');
  si.readOnly=false;ti.readOnly=false;pi.readOnly=false;
  si.value=style;ti.value=texture;pi.value=proportion;
  si.placeholder='';ti.placeholder='';pi.placeholder='';
  document.getElementById('genbtn').disabled=false;
  document.getElementById('analysismsg').style.display='none';
}

function reUpload(){
  currentImageData=null;
  document.getElementById('upload').classList.remove('ok');
  document.getElementById('uempty').style.display='block';
  document.getElementById('uprev').style.display='none';
  document.getElementById('analysismsg').style.display='none';
  document.getElementById('style').value='';document.getElementById('style').placeholder='上传图片后自动分析...';
  document.getElementById('texture').value='';document.getElementById('texture').placeholder='上传图片后自动分析...';
  document.getElementById('proportion').value='';document.getElementById('proportion').placeholder='上传图片后自动分析...';
  document.getElementById('style').readOnly=true;document.getElementById('texture').readOnly=true;document.getElementById('proportion').readOnly=true;
  document.getElementById('genbtn').disabled=true;
  fi.value='';
}

// ===== 排版选择 =====
function selLayout(l){
  document.querySelectorAll('.og > .oc').forEach(function(c){c.classList.remove('sel')});
  document.querySelector('.og > .oc[data-l="'+l+'"]').classList.add('sel');
  document.getElementById('classic-sub').style.display=(l==='classic'?'block':'none');
  document.getElementById('patch-sub').style.display=(l==='patch'?'block':'none');
}


// ===== 免费翻译API（Google Translate） =====
async function translateZhToEn(text){
  if(!text || text.length > 500) return text;
  try{
    var url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q='+encodeURIComponent(text);
    var r=await fetch(url);
    var d=await r.json();
    return d[0][0][0]||text;
  }catch(e){return text;}
}

// ===== 生成提示词（三种语言） =====
async function genPrompt(){
  var s=document.getElementById('style').value||'影视级古装写实数字人';
  var t=document.getElementById('texture').value||'微毛孔级肤质扫描复刻';
  var p=document.getElementById('proportion').value||'东亚真人1:1头身比';
  // 翻译为英文
  var s_en=await translateZhToEn(s);
  var t_en=await translateZhToEn(t);
  var p_en=await translateZhToEn(p);
  var layout=document.querySelector('.og > .oc.sel');
  var layoutName=layout?layout.querySelector('.oc-ttl').textContent:'经典宽幅横图';
  var subVal=document.getElementById('classic-sub-select').value;
  var subName=(subVal==='apose')?'A-pose三视图':'左侧特写+A-pose';
  // 存储生成的文本
  window._promptZh='';window._promptEn='';window._promptJson='';

    if(layoutName==='经典宽幅横图'){
    if(subName==='A-pose三视图'){
      // 中文
      window._promptZh='【经典宽幅横图 - A-pose三视图】\n\n严格参考上传图的原生美术风格与核心质感，生成一张精确作为视频大模型“视觉真值（Ground Truth）”的 **'+s+'** 角色基准资产（Character Benchmark Asset 大图）。采用16:9宽幅横图布局，背景为纯白无阴影的工业级白底。\n\n画面内容：\n并排排列三个超清锐利的全身A-pose放松站立像。顺序为：\n1. 全身正视站姿\n2. 全身45度半侧视站姿\n3. 全身正后视站姿\n\n强约束：这三个全身像必须具有恰当的 **'+t+'** 结构，以及**'+p+'**。保持自然挺拔的最终基准站姿。全身像表情必须固定为中立无表情（Neutral），双手必须自然垂直下垂在身体两侧，绝对禁止摆任何戏剧化动作或遮挡身体细节。这三个全身像的面部、发型、体态与服饰必须100%绝对同源一致。\n\n服饰细节与画质全局强约束：所有视角必须穿着与参考图绝对一致的服装，不仅款式极度还原，连微小的缝合线、褶皱走势与材质光泽也必须原封不动保留。\n8K超高清，极度锐利清晰，采用无限景深（Infinite DoF F/32）与全图极其锐利等同对焦，绝对禁止任何散焦、周边视觉虚化或景深效果（Zero depth of field/bokeh），所有布料细节必须如工业白模般纤毫尽现。全局采用绝对无阴影的高级漫反射平光（Diffuse flat studio lighting），无死角均匀照亮所有材质，禁止产生任何剧烈的明暗交界线与环境色光污染（Ambient light pollution）。多个分镜中的脸型、骨相、五官、发色、瞳色必须100%绝对一致。画面内绝对禁止出现任何文字字母、标签水印或Logo。禁止五官漂移，禁止出现多余人物。'
      // 英文
      window._promptEn='[Classic Wide Horizontal - A-pose Three Views]\n\nStrictly reference the original art style and core texture of the uploaded image, generating a precise **'+s_en+'** Character Benchmark Asset as visual Ground Truth for the video generation model. Use a 16:9 wide horizontal layout with pure white industrial background without shadows.\n\nContent:\nArrange three ultra-sharp full-body A-pose relaxed standing figures side by side. In order:\n1. Full-body front view standing\n2. Full-body 45-degree three-quarter view standing\n3. Full-body back view standing\n\nStrong Constraints: All three full-body figures must have proper **'+t_en+'** structure and **'+p_en+'**. Maintain a naturally upright final benchmark stance. Facial expressions must be fixed to neutral (Neutral), hands must naturally hang vertically at the sides, absolutely no dramatic poses or obstruction of body details. The face, hairstyle, physique, and clothing of all three figures must be 100% identical.\n\nGlobal Constraints on Clothing Details and Image Quality: All views must wear clothing absolutely consistent with the reference image - not only the style must be extremely faithful, but even the smallest stitching lines, wrinkle directions, and material luster must be preserved exactly.\n8K ultra HD, extremely sharp and clear, using infinite depth of field (Infinite DoF F/32) with uniformly sharp focus across the entire image, absolutely no defocus, peripheral blur, or depth of field effects (Zero depth of field/bokeh). All fabric details must be as clearly visible as an industrial white model. Global use of absolutely shadowless advanced diffuse flat studio lighting, evenly illuminating all materials without死角, prohibiting any harsh chiaroscuro or ambient light pollution.\nFace shape, bone structure, facial features, hair color, and pupil color must be 100% consistent across all shots.\nAbsolutely no text, labels, watermarks, or logos within the frame.\nNo facial feature drift, no extra characters.'
      // JSON
      window._promptJson=JSON.stringify({
        layout:'classic_wide',subtype:'apose_three_views',aspect_ratio:'16:9',
        style:s,texture:t,proportion:p,
        description:'A-pose three views (front, side, back) of '+s+' character on white background',
        details:{front_view:'full body facing camera, arms at sides, standard A-pose',side_view:'full body rotated 90 degrees right, showing silhouette',back_view:'full body facing away, showing back contour'},
        quality:'8K ultra HD, infinite DoF F/32, diffuse flat studio lighting, no shadows, no text/watermark/logo'
      },null,2);
    } else {
      // 左侧特写+A-pose 中文
      window._promptZh='【经典宽幅横图 - 左侧特写+A-pose三视图】\n\n严格参考上传图的原生美术风格与核心质感，生成一张精确作为视频大模型“视觉真值（Ground Truth）”的 **'+s+'** 角色基准资产。采用左一右三水平对齐的16:9宽幅布局，背景为纯白无阴影的工业级白底。\n\n画面最左侧：展示一个超高清的头部近景大特写肖像（仅到肩颈处）。特写必须极其清晰地完美还原参考图人物的面部骨相特征、五官细节、特定的发型结构以及**'+t+'**。肩颈与前胸区域必须极其干净纯粹、严禁任何形式的遮挡，百分之百完全暴露该区域的原始皮肤与服装纹理。\n\n画面右侧：并排排列三个超清锐利的全身A-pose放松站立像。顺序为：\n1. 全身正视站姿——人物面向镜头，双手自然垂于身体两侧，标准A-pose\n2. 全身45度半侧视站姿——人物旋转45度面向左侧，展示身体侧面轮廓，标准A-pose\n3. 全身正后视站姿——人物背对镜头，展示背部轮廓与服饰背面细节，标准A-pose\n\n强约束：这三个全身像必须具有恰当的 **'+p+'** 结构，保持自然挺拔的A-pose基准站姿。表情必须固定为中立无表情（Neutral），绝对禁止摆任何戏剧化动作或遮掩身体细节。三个全身像的面部、发型、体态与服饰必须与最左侧的大特写保持100%绝对同源一致。\n\n服饰细节与画质感全局要求：所有视角必须穿着与参考图绝对一致的服装，连微小的缝合线、褶皱走势与材质光泽也必须原封不动保留。8K超高清，极度锐利清晰，采用无限景深（Infinite DoF F/32），绝对禁止任何散焦或景深效果。全局采用绝对无阴影的高级漫反射平光（Diffuse flat studio lighting），无死角均匀照亮所有材质。画面内绝对禁止出现任何文字字母、标签水印或Logo。禁止五官漂移，禁止出现多余人物。'
      // 英文
      window._promptEn='[Classic Wide Horizontal - Left Close-up + A-pose Three Views]\n\nStrictly reference the original art style and core texture of the uploaded image, generating a precise **'+s_en+'** Character Benchmark Asset as visual Ground Truth for the video generation model. Use a left-right horizontal 16:9 wide layout with pure white industrial background without shadows.\n\nFar Left: Display an ultra-high-definition head close-up portrait (shoulder and above only). The close-up must extremely clearly and perfectly reproduce the facial bone structure, facial features, specific hairstyle structure, and **'+t_en+'** of the reference character. The shoulder, neck, and chest area must be extremely clean and pure, absolutely no obstruction of any kind, 100% fully exposing the original skin and clothing texture of the area.\n\nRight Side: Arrange three ultra-sharp full-body A-pose relaxed standing figures side by side. In order:\n1. Full-body front view standing - character facing the camera, arms naturally at sides, standard A-pose\n2. Full-body 45-degree three-quarter view standing - character rotated 45 degrees to the left, showing body silhouette, standard A-pose\n3. Full-body back view standing - character facing away from camera, showing back contour and clothing details, standard A-pose\n\nStrong Constraints: All three full-body figures must have proper **'+p_en+'** structure, maintaining a naturally upright A-pose benchmark stance. Expressions must be fixed to neutral (Neutral), absolutely no dramatic poses or body obstruction. The face, hairstyle, physique, and clothing of all three figures must be 100% consistent with the far-left close-up.\n\nGlobal Constraints on Clothing Details and Image Quality: All views must wear clothing absolutely consistent with the reference image - even the smallest stitching lines, wrinkle directions, and material luster must be preserved exactly. 8K ultra HD, extremely sharp and clear, using infinite depth of field (Infinite DoF F/32), absolutely no defocus or depth of field effects. Global use of absolutely shadowless advanced diffuse flat studio lighting, evenly illuminating all materials. Absolutely no text, labels, watermarks, or logos within the frame. No facial feature drift, no extra characters.'
      // JSON
      window._promptJson=JSON.stringify({
        layout:'classic_wide',subtype:'left_closeup_plus_apose',aspect_ratio:'16:9',
        style:s,texture:t,proportion:p,
        description:'Left head close-up + right three A-pose views (front, side, back) of '+s+' character on white background, 16:9 wide layout',
        panels:{left:'head close-up portrait, shoulder and above, showing '+t,right:['full body front view standard A-pose','full body side view 90 degrees','full body back view']},
        quality:'8K ultra HD, infinite DoF F/32, diffuse flat studio lighting, no shadows, no text/watermark/logo, no facial drift'
      },null,2);
    }
  } else {
    // 16:9特写补丁 中文
    window._promptZh='【16:9特写补丁 - 6宫格微刻阵列】\n\n严格参考上传图的原生美术风格与核心质感，生成一张精确作为视频大模型"视觉真值（Ground Truth）"的 **'+s+'** 角色基准资产（Character Benchmark Asset 大图）。采用16:9六宫格微刻阵列布局，背景为纯白无阴影的工业级白底。\n\n六宫格排列（2行 x 3列），从左至右、从上至下依次为：\n\n第一行：\n1. 侧面头部特写——从90度侧方拍摄头部，清晰展示面部侧面轮廓、耳朵结构、发型侧面纹理，确保**'+t+'**在侧面光影下可见\n2. 顶部头部特写——从正上方俯拍头顶，展示发旋走向、发型顶部结构、头骨形状\n3. 背面头部特写——从正后方拍摄后脑勺，展示发型背面形态、后颈与衣领衔接细节\n\n第二行：\n4. 胸腹部特写——从正面拍摄胸部至腰部区域，展示服装上半身版型、胸腹部纹理细节、腰带/配饰结构\n5. 背腰部特写——从背面拍摄背部至腰部区域，展示服装背部版型、肩胛骨轮廓、腰部收束细节\n6. 脚步特写——从正面拍摄脚部及鞋履，展示鞋型结构、鞋带/绑带细节、裤子下摆与鞋面的衔接\n\n强约束：所有分镜必须具有恰当的 **'+p+'** 结构参照。六个分镜中的人物面部、发型、肤色、服饰材质必须100%绝对同源一致，不污染原画风。\n\n服饰细节与画质全局强约束：所有视角必须穿着与参考图绝对一致的服装，不仅款式极度还原，连微小的缝合线、褶皱走势与材质光泽也必须原封不动保留。\n8K超高清，极度锐利清晰，采用无限景深（Infinite DoF F/32）与全图极其锐利等同对焦，绝对禁止任何散焦、周边视觉虚化或景深效果（Zero depth of field/bokeh），所有布料细节必须如工业白模般纤毫毕现。全局采用绝对无阴影的高级漫反射平光（Diffuse flat studio lighting），无死角均匀照亮所有材质，禁止产生任何剧烈的明暗交界线与环境色光污染（Ambient light pollution）。\n多个分镜中的脸型、骨相、五官、发色、瞳色必须100%绝对一致。\n画面内绝对禁止出现任何文字字母、标签水印或Logo。\n禁止五官漂移，禁止出现多余人物。';
    // 英文
    window._promptEn='[16:9 Close-up Patch - 6-grid Micro Detail Array]\n\nStrictly reference the original art style and core texture of the uploaded image to generate a '+s_en+' Character Benchmark Asset as visual Ground Truth for the video generation model. Use a 16:9 six-grid micro detail array layout with pure white industrial background without shadows.\n\nSix-grid arrangement (2 rows x 3 columns), from left to right, top to bottom:\n\nRow 1:\n1. Side head close-up - shot from a 90-degree side angle, clearly showing facial side profile, ear structure, hair side texture, ensuring '+t_en+' is visible under side lighting\n2. Top head close-up - shot from directly above the crown, showing hair whorl direction, top hair structure, skull shape\n3. Back head close-up - shot from directly behind the back of the head, showing back hair shape, nape and collar connection details\n\nRow 2:\n4. Chest and abdomen close-up - shot from the front, showing upper body garment fit, chest and abdomen texture details, belt/accessory structure\n5. Back waist close-up - shot from the back, showing back garment fit, shoulder blade contour, waist cinching details\n6. Foot close-up - shot from the front, showing shoe structure, lace/strap details, pant hem and shoe connection\n\nStrong Constraints: All panels must reference proper '+p_en+' structure. The face, hairstyle, skin tone, and clothing material across all six panels must be 100% consistent, without contaminating the original art style.\n\nGlobal Constraints on Clothing Details and Image Quality: All views must wear clothing absolutely consistent with the reference image - not only the style must be extremely faithful, but even the smallest stitching lines, wrinkle directions, and material luster must be preserved exactly.\n8K ultra HD, extremely sharp and clear, using infinite depth of field (Infinite DoF F/32) with uniformly sharp focus across the entire image, absolutely no defocus, peripheral blur, or depth of field effects (Zero depth of field/bokeh). All fabric details must be as clearly visible as an industrial white model. Global use of absolutely shadowless advanced diffuse flat studio lighting, evenly illuminating all materials without死角, prohibiting any harsh chiaroscuro or ambient light pollution.\nFace shape, bone structure, facial features, hair color, and pupil color must be 100% consistent across all shots.\nAbsolutely no text, labels, watermarks, or logos within the frame.\nNo facial feature drift, no extra characters.'
    // JSON
    window._promptJson=JSON.stringify({
      layout:'closeup_patch',subtype:'six_grid_micro_array',aspect_ratio:'16:9',
      style:s,texture:t,proportion:p,
      description:'Six-grid close-up detail array of '+s+' character on white background',
      grid:{row1:['side head close-up','top head close-up','back head close-up'],row2:['chest and abdomen close-up','back waist close-up','foot close-up']},
      quality:'8K ultra HD, infinite DoF F/32, diffuse flat studio lighting, no shadows, no text/watermark/logo'
    },null,2);
  }

  // 显示中文
  swLang('zh');
  document.getElementById('ptext').value=window._promptZh;
  autoResizeTextarea();
  document.getElementById('ptext').scrollTop=0;
  document.querySelectorAll('.card')[2].scrollIntoView({behavior:'smooth'});
}

// ===== 语言切换 =====
function autoResizeTextarea(){
  var ta=document.getElementById('ptext');
  ta.style.height='auto';
  ta.style.height=ta.scrollHeight+'px';
}

function swLang(l){
  document.querySelectorAll('#ltabs .b-tab').forEach(function(t){t.classList.remove('on')});
  document.querySelector('#ltabs .b-tab[data-l="'+l+'"]').classList.add('on');
  var ta=document.getElementById('ptext');
  if(l==='zh') ta.value=window._promptZh||'';
  else if(l==='en') ta.value=window._promptEn||'';
  else if(l==='json') ta.value=window._promptJson||'';
  ta.scrollTop=0;
  autoResizeTextarea();
}

// ===== 复制提示词 =====
function copyPrompt(){
  var ta=document.getElementById('ptext');
  if(!ta.value.trim()){
    document.getElementById('cpytext').textContent='请先生成提示词';
    setTimeout(function(){document.getElementById('cpytext').textContent='复制提示词'},2000);
    return;
  }
  ta.select();ta.setSelectionRange(0,99999);
  try{navigator.clipboard.writeText(ta.value).then(showCopied)['catch'](function(){document.execCommand('copy');showCopied()})}catch(e){document.execCommand('copy');showCopied()}
}
function showCopied(){document.getElementById('cpytext').textContent='\u2713 已复制';setTimeout(function(){document.getElementById('cpytext').textContent='复制提示词'},2000)}

// ===== 重新开始 =====
function resetAll(){
  document.getElementById('style').value='';document.getElementById('style').placeholder='上传图片后自动分析...';document.getElementById('style').readOnly=true;
  document.getElementById('texture').value='';document.getElementById('texture').placeholder='上传图片后自动分析...';document.getElementById('texture').readOnly=true;
  document.getElementById('proportion').value='';document.getElementById('proportion').placeholder='上传图片后自动分析...';document.getElementById('proportion').readOnly=true;
  document.getElementById('ptext').value='';window._promptZh='';window._promptEn='';window._promptJson='';
  document.getElementById('genbtn').disabled=true;
  // API 配置保留，不随重置清除
  reUpload();
  document.getElementById('classic-sub-select').value='closeup';
  selLayout('classic');
  swLang('zh');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ===== API 帮助弹窗 =====
function toggleApiAcc(el){
  var parent = el.parentElement;
  var body = parent.querySelector('.api-acc-bd');
  var isOpen = body.classList.contains('on');
  // 关闭所有
  document.querySelectorAll('.api-acc-bd.on').forEach(function(b){ b.classList.remove('on'); });
  document.querySelectorAll('.api-acc-h.on').forEach(function(h){ h.classList.remove('on'); });
  // 如果点击的不是已打开的，则打开它
  if(!isOpen){
    body.classList.add('on');
    el.classList.add('on');
  }
}

function showApiHelp(){
  document.getElementById('api-help-overlay').style.display='flex';
}
function closeApiHelp(e){
  if(!e || e.target===document.getElementById('api-help-overlay'))
    document.getElementById('api-help-overlay').style.display='none';
}

// ===== 底部折叠 =====
function toggleFoot(){
  var c=document.getElementById('fcont'),a=document.querySelector('.b-foot .arr');
  if(c.style.display==='none'||c.style.display===''){c.style.display='block';a.classList.add('on')}
  else{c.style.display='none';a.classList.remove('on')}
}

// ===== 拼接功能 =====
var stitchImages = [null, null];
var stitchDir = 'h';

function stitchLoadImg(idx, input){
  if(!input.files.length) return;
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function(e){
    stitchImages[idx-1] = e.target.result;
    var prev = document.getElementById('stitch-prev'+idx);
    var empty = document.getElementById('stitch-empty'+idx);
    var upload = document.getElementById('stitch-upload'+idx);
    document.getElementById('stitch-img'+idx).src = e.target.result;
    empty.style.display = 'none';
    prev.style.display = 'flex';
    upload.classList.add('ok');
    updateStitchBtn();
  };
  reader.readAsDataURL(file);
}

function stitchSetDir(dir){
  stitchDir = dir;
  document.getElementById('stitch-dir-h').classList.toggle('on', dir==='h');
  document.getElementById('stitch-dir-v').classList.toggle('on', dir==='v');
}

function updateStitchBtn(){
  document.getElementById('stitch-btn').disabled = !(stitchImages[0] && stitchImages[1]);
}

function doStitch(){
  if(!stitchImages[0] || !stitchImages[1]) return;
  var errEl = document.getElementById('stitch-err');
  errEl.style.display = 'none';
  var btn = document.getElementById('stitch-btn');
  btn.disabled = true;
  btn.innerHTML = '<svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> 拼接中...';

  var img1 = new Image();
  var img2 = new Image();
  var loaded = 0;

  img1.onload = function(){ checkLoad(); };
  img2.onload = function(){ checkLoad(); };
  img1.onerror = function(){ showStitchErr('图1 加载失败'); };
  img2.onerror = function(){ showStitchErr('图2 加载失败'); };

  img1.src = stitchImages[0];
  img2.src = stitchImages[1];

  function checkLoad(){
    loaded++;
    if(loaded < 2) return;
    // 两张图都加载完成，执行拼接
    setTimeout(function(){ performStitch(img1, img2); }, 100);
  }
}

function performStitch(img1, img2){
  try{
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    if(stitchDir === 'h'){
      var h = Math.max(img1.height, img2.height);
      var r1 = h / img1.height, r2 = h / img2.height;
      var w1 = Math.round(img1.width * r1), w2 = Math.round(img2.width * r2);
      canvas.width = w1 + w2;
      canvas.height = h;
      ctx.drawImage(img1, 0, 0, w1, h);
      ctx.drawImage(img2, w1, 0, w2, h);
    } else {
      var w = Math.max(img1.width, img2.width);
      var r1 = w / img1.width, r2 = w / img2.width;
      var h1 = Math.round(img1.height * r1), h2 = Math.round(img2.height * r2);
      canvas.width = w;
      canvas.height = h1 + h2;
      ctx.drawImage(img1, 0, 0, w, h1);
      ctx.drawImage(img2, 0, h1, w, h2);
    }

    var dataUrl = canvas.toDataURL('image/png');
    document.getElementById('stitch-output').src = dataUrl;
    document.getElementById('stitch-result').style.display = 'block';

    var btn = document.getElementById('stitch-btn');
    btn.disabled = false;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> 重新拼接';
  } catch(e){
    showStitchErr('拼接失败：'+e.message);
  }
}

function showStitchErr(msg){
  var errEl = document.getElementById('stitch-err');
  errEl.textContent = msg;
  errEl.style.display = 'block';
  var btn = document.getElementById('stitch-btn');
  btn.disabled = false;
  btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> 开始拼接';
}

function stitchDownload(fmt){
  var img = document.getElementById('stitch-output');
  if(!img.src) return;
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var srcImg = new Image();
  srcImg.onload = function(){
    canvas.width = srcImg.width;
    canvas.height = srcImg.height;
    ctx.drawImage(srcImg, 0, 0);
    var mime = (fmt === 'jpg') ? 'image/jpeg' : 'image/png';
    var ext = (fmt === 'jpg') ? '.jpg' : '.png';
    var quality = (fmt === 'jpg') ? 0.95 : undefined;
    var dataUrl = canvas.toDataURL(mime, quality);
    var a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'blueprint_stitch_'+new Date().getTime()+ext;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  srcImg.src = img.src;
}

// ===== 禁止右键 & 屏蔽 F12 =====
(function(){
  document.addEventListener('contextmenu',function(e){e.preventDefault()});
  var devMsg = 'Hi，欢迎访问"简主页"，请牢记域名 ZHUYE.XYZ。';
  document.addEventListener('keydown',function(e){
    if(e.key==='F12'||e.keyCode===123){
      e.preventDefault();
      setTimeout(function(){alert(devMsg)},10);
    }
    if(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'||e.key==='C'||e.keyCode===73||e.keyCode===74||e.keyCode===67)){
      e.preventDefault();
      setTimeout(function(){alert(devMsg)},10);
    }
  });
})();
