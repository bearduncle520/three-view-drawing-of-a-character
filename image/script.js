/* ============================================================
   角色形象多视图图片生成器 - script.js
   功能：基于参考图+提示词，通过AI图像生成模型生成多视图图片
   ============================================================ */

// ---- 平台与模型配置 ----
// 效果标注: ⭐⭐⭐ 顶级 / ⭐⭐ 优秀 / ⭐ 良好 / — 不支持
var PLATFORMS = {
  '阿里百炼': {
    name: '阿里百炼（通义万相）',
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    imgGen: true,
    desc: '万相系列图像生成模型，wan2.7支持多图参考生成（使用V2多模态API，无需额外开通）',
    models: [
      { id: 'wan2.7-image-pro', label: '万相2.7 Image Pro（旗舰版）', rating: '⭐⭐⭐', free: '新用户赠百元免费额度', price: '0.12 元/张', note: '支持多图参考生成，4K输出，最新旗舰，推荐' },
      { id: 'wan2.7-image', label: '万相2.7 Image（标准版）', rating: '⭐⭐⭐', free: '新用户赠百元免费额度', price: '0.06 元/张', note: '支持多图参考生成，画质优秀' },
      { id: 'wan2.6-image', label: '万相2.6 Image（图文混排）', rating: '⭐⭐⭐', free: '新用户赠百元免费额度', price: '0.05 元/张', note: '支持图文一体化，多图融合，参考图生成' },
      { id: 'wan2.5-i2i-preview', label: '万相2.5 I2I Preview（图生图）', rating: '⭐⭐', free: '新用户赠百元免费额度', price: '0.04 元/张', note: '支持多图参考生成，指令编辑，预览版' },
      { id: 'wanx2.1-t2i-plus', label: '通义万相-增强版（V1兼容）', rating: '⭐⭐', free: '新用户赠百元免费额度', price: '0.08 元/张', note: 'V1格式，支持ref_image参考图' },
      { id: 'wanx2.1-t2i-turbo', label: '通义万相-快照（V1快速版）', rating: '⭐⭐', free: '新用户赠百元免费额度', price: '0.02 元/张', note: 'V1格式，支持ref_image参考图，快速生成' },
      { id: 'kling/kling-v3-image-generation', label: '可灵Kling V3（图像生成）', rating: '⭐⭐⭐', free: '新用户赠百元免费额度', price: '0.10 元/张', note: '支持最多10张参考图，风格一致，异步API' },
    ]
  },

  '豆包': {
    name: '豆包（火山引擎）',
    endpoint: 'https://ark.cn-beijing.volces.com/api/v3',
    imgGen: true,
    desc: '火山引擎豆包模型，Seedream系列支持参考图生图',
    models: [
      { id: 'doubao-seedream-5.0-lite', label: 'Seedream 5.0 Lite（参考图生图）', rating: '⭐⭐⭐', free: '新用户赠 50 万 tokens', price: '0.04 元/张', note: '最新模型，支持参考图，角色一致性佳，推荐' },
      { id: 'doubao-seedream-5.0-pro', label: 'Seedream 5.0 Pro（专业图像生成）', rating: '⭐⭐⭐', free: '新用户赠 50 万 tokens', price: '0.08 元/张', note: '旗舰模型，支持参考图，画质最优' },
    ]
  },
  '硅基流动': {
    name: '硅基流动（SiliconFlow）',
    endpoint: 'https://api.siliconflow.cn/v1',
    imgGen: true,
    desc: '开源图像生成模型平台，FLUX系列画质极高，模型丰富',
    models: [
      { id: 'black-forest-labs/FLUX.1-pro', label: 'FLUX.1-pro（专业版）', rating: '⭐⭐⭐', free: '新用户赠 14 元余额', price: '0.15 元/张', note: '画质顶级，支持参考图，推荐' },
      { id: 'black-forest-labs/FLUX.1-dev', label: 'FLUX.1-dev（开发版）', rating: '⭐⭐⭐', free: '新用户赠 14 元余额', price: '0.06 元/张', note: '高质量开源模型，支持参考图，多视图表现好' },
      { id: 'black-forest-labs/FLUX.1-schnell', label: 'FLUX.1-schnell（快速版）', rating: '⭐⭐', free: '新用户赠 14 元余额', price: '0.02 元/张', note: '生成速度快，支持参考图，适合快速测试' },
      { id: 'black-forest-labs/FLUX.1-pro-ultra', label: 'FLUX.1-pro-ultra（超高清版）', rating: '⭐⭐⭐', free: '新用户赠 14 元余额', price: '0.25 元/张', note: '超高清画质，支持参考图，角色表现力最强' },
      { id: 'stabilityai/stable-diffusion-3-5-large', label: 'SD 3.5 Large（SD最新大模型）', rating: '⭐⭐', free: '新用户赠 14 元余额', price: '0.05 元/张', note: '构图能力强，支持参考图，细节丰富' },
      { id: 'stabilityai/stable-diffusion-3-5-medium', label: 'SD 3.5 Medium（轻量版）', rating: '⭐', free: '新用户赠 14 元余额', price: '0.02 元/张', note: '轻量版，支持参考图，速度较快' },
      { id: 'Kwai-Kolors/Kolors-diffusers', label: 'Kolors 可图（快手开源）', rating: '⭐⭐', free: '新用户赠 14 元余额', price: '0.03 元/张', note: '快手开源，中文理解强，支持参考图' },
      { id: 'stabilityai/stable-diffusion-xl-base-1.0', label: 'SDXL 1.0（经典大模型）', rating: '⭐⭐', free: '新用户赠 14 元余额', price: '0.02 元/张', note: '经典SDXL模型，生态成熟，支持参考图' },
      { id: 'stabilityai/sdxl-turbo', label: 'SDXL Turbo（极速版）', rating: '⭐', free: '新用户赠 14 元余额', price: '0.01 元/张', note: '1-2步生成，支持参考图，适合快速迭代' },
    ]
  },

  '智谱': {
    name: '智谱 AI',
    endpoint: 'https://open.bigmodel.cn/api/paas/v4',
    imgGen: true,
    desc: 'CogView系列图像生成模型，布局理解强',
    models: [
      { id: 'cogview-4', label: 'CogView-4（最新图像生成）', rating: '⭐⭐⭐', free: '新用户赠 500 万 tokens', price: '0.06 元/张', note: '布局理解最强，多视图效果最佳，支持参考图，推荐' },

    ]
  },
  '自定义': {
    name: '自定义',
    endpoint: '',
    imgGen: true,
    desc: '自行配置兼容 OpenAI 格式的图像生成 API',
    models: []
  }
};

// ---- Global State ----
var currentImageData = null;
var generatedImageUrl = '';
var _stitchDir = 'h';
var _stitchImages = {};
var _stitchState = 'idle'; // idle | ready | done

// ---- API Config Persistence ----
function saveApiConfig() {
  try {
    var cfg = {
      key: document.getElementById('apikey').value,
      ep: document.getElementById('apiendpoint').value,
      platform: document.getElementById('pselect').value,
      model: document.getElementById('modelselect').value
    };
    localStorage.setItem('img_api_config_v2', JSON.stringify(cfg));
  } catch(e) {}
}

function restoreApiConfig() {
  try {
    var raw = localStorage.getItem('img_api_config_v2');
    if (!raw) return;
    var cfg = JSON.parse(raw);
    if (cfg.platform) {
      document.getElementById('pselect').value = cfg.platform;
      onPlatformChange();
      if (cfg.model) {
        document.getElementById('modelselect').value = cfg.model;
        onModelChange();
      }
    }
    if (cfg.ep) {
      document.getElementById('apiendpoint').value = cfg.ep;
      document.getElementById('apiendpoint').readOnly = false;
    }
    if (cfg.key) {
      document.getElementById('apikey').value = cfg.key;
      onKeyChange();
    }
  } catch(e) {}
}

// ---- Platform & Model Selection ----
function onPlatformChange() {
  var sel = document.getElementById('pselect');
  var platform = sel.value;
  var modelGroup = document.getElementById('model-select-group');
  var modelSel = document.getElementById('modelselect');
  var ep = document.getElementById('apiendpoint');
  var cap = document.getElementById('model-cap');

  if (!platform) {
    modelSel.disabled = true;
    ep.value = '';
    ep.readOnly = true;
    setConnBtn('wait', '等待配置');
    updateModeTip(null);
    return;
  }

  if (platform === '自定义') {
    modelSel.disabled = true;
    ep.value = '';
    ep.readOnly = false;
    ep.placeholder = '请手动输入 API 端点（需支持 /v1/images/generations）';
    cap.textContent = '';
    checkReady();
    saveApiConfig();
    updateModeTip('自定义');
    return;
  }

  var pf = PLATFORMS[platform];
  if (!pf) return;

  modelSel.disabled = false;
  ep.value = pf.endpoint;
  ep.readOnly = true;

  if (pf.imgGen) {
    cap.textContent = '✅ 支持图像生成';
    cap.style.color = '#34d399';
  } else {
    cap.textContent = '⚠️ 仅文本/视觉理解';
    cap.style.color = '#f87171';
  }

  var opts = '<option value="" disabled selected>请选择模型</option>';
  pf.models.forEach(function(m) {
    var label = m.label;
    if (m.rating && m.rating !== '—') label = '[' + m.rating + '] ' + label;
    opts += '<option value="' + m.id + '" data-note="' + (m.note || '') + '">' + label + '</option>';
  });
  modelSel.innerHTML = opts;
  document.getElementById('modelinfo').style.display = 'none';

  if (pf.imgGen) {
    setConnBtn('wait', '请选择模型');
  } else {
    setConnBtn('fail', '不支持图像生成');
    showError('⚠️ ' + pf.name + ' 当前不支持图像生成，请选择支持图像生成的平台（如硅基流动、智谱、阿里百炼等）');
  }

  updateModeTip(platform);
  saveApiConfig();
}

function onModelChange() {
  var platform = document.getElementById('pselect').value;
  var modelId = document.getElementById('modelselect').value;
  var pf = PLATFORMS[platform];
  if (!pf || !modelId) return;

  var model = pf.models.find(function(m) { return m.id === modelId; });
  if (model) {
    document.getElementById('mfree').textContent = model.free;
    document.getElementById('mprice').textContent = model.price;
    document.getElementById('modelinfo').style.display = 'block';
  }

  checkReady();
  saveApiConfig();
}

function updateModeTip(platform) {
  var ptip = document.getElementById('platform-tip');
  var ttext = document.getElementById('tip-text');
  if (!ptip || !ttext) return;
  var modelinfo = document.getElementById('modelinfo');
  if (!platform) {
    ptip.style.display = 'none';
    return;
  }
  ptip.style.display = 'block';
  var TIPS = {
    '阿里百炼': { text: '万相系列推荐 <strong>wan2.7-image-pro</strong>，可灵AI支持最多10张参考图，均支持多图参考生成', border: 'rgba(52,211,153,.25)', bg: 'rgba(16,185,129,.06)', color: '#a7f3d0' },
    '千问图像': { text: '千问图像系列擅长文本渲染与复杂布局，推荐 <strong>Qwen-Image-Max</strong>（旗舰版，画质最佳）', border: 'rgba(52,211,153,.25)', bg: 'rgba(16,185,129,.06)', color: '#a7f3d0' },
    '硅基流动': { text: 'FLUX 系列画质顶级，多视图效果优秀，推荐 <strong>FLUX.1-pro</strong>（专业级画质）或 <strong>FLUX.1-dev</strong>（性价比高）', border: 'rgba(52,211,153,.25)', bg: 'rgba(16,185,129,.06)', color: '#a7f3d0' },
    '豆包': { text: 'Seedream 系列支持参考图生图，角色一致性表现优秀，推荐 <strong>Seedream 5.0 Lite</strong>（支持参考图，性价比高）', border: 'rgba(52,211,153,.25)', bg: 'rgba(16,185,129,.06)', color: '#a7f3d0' },
    '智谱': { text: 'CogView-4 布局理解能力最强，多视图效果最佳，推荐 <strong>CogView-4</strong>（最新图像生成模型）', border: 'rgba(52,211,153,.25)', bg: 'rgba(16,185,129,.06)', color: '#a7f3d0' },
    '自定义': { text: '自行配置兼容 OpenAI 格式的图像生成 API，需确保端点支持 /v1/images/generations 接口', border: 'rgba(251,191,36,.25)', bg: 'rgba(251,191,36,.06)', color: '#fde68a' }
  };
  var tip = TIPS[platform];
  if (tip) {
    ttext.innerHTML = tip.text;
    ptip.style.borderColor = tip.border;
    ptip.style.background = tip.bg;
    ptip.style.color = tip.color;
  }
}

function toggleKey() {
  var inp = document.getElementById('apikey');
  var eye = document.getElementById('keyeye');
  if (inp.type === 'password') {
    inp.type = 'text';
    eye.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>';
  } else {
    inp.type = 'password';
    eye.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  }
}

function onKeyChange() { checkReady(); saveApiConfig(); }

function setConnBtn(state, text) {
  var btn = document.getElementById('connbtn');
  btn.className = 's-btn ' + state;
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> ' + text;
}

function checkReady() {
  var key = document.getElementById('apikey').value.trim();
  var ep = document.getElementById('apiendpoint').value.trim();
  var platform = document.getElementById('pselect').value;
  var pf = platform ? PLATFORMS[platform] : null;
  if (pf && !pf.imgGen) { setConnBtn('fail', '不支持图像生成'); return false; }
  if (key && ep) { setConnBtn('ready', '测试连接'); return true; }
  setConnBtn('wait', '等待配置');
  return false;
}

function onConnBtnClick() {
  var btn = document.getElementById('connbtn');
  if (btn.classList.contains('ready') || btn.classList.contains('fail')) {
    testConnection();
  }
}

async function testConnection() {
  var key = document.getElementById('apikey').value.trim();
  var ep = document.getElementById('apiendpoint').value.trim();
  var platform = document.getElementById('pselect').value;
  var pf = platform ? PLATFORMS[platform] : null;
  if (!key || !ep) return;
  if (pf && !pf.imgGen) { setConnBtn('fail', '不支持图像生成'); return; }

  setConnBtn('testing', '<svg class="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg> 测试中...');

  try {
    var url = ep.replace(/\/+$/, '') + '/chat/completions';
    var modelSel = document.getElementById('modelselect');
    var modelName = modelSel.value || 'gpt-3.5-turbo';
    if (platform === '阿里百炼') modelName = 'qwen-turbo';
    var resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({ model: modelName, messages: [{ role: 'user', content: 'hi' }], max_tokens: 1 })
    });
    if (resp.ok) { setConnBtn('ok', '连接成功'); }
    else { var errText = await resp.text().catch(function() { return ''; }); setConnBtn('fail', 'HTTP ' + resp.status + ' ' + (errText.substring(0, 40) || '')); }
  } catch(e) { setConnBtn('fail', '连接失败: ' + e.message.substring(0, 30)); }
}

function clearApiConfig() {
  document.getElementById('apikey').value = '';
  document.getElementById('apiendpoint').value = '';
  document.getElementById('apiendpoint').readOnly = true;
  document.getElementById('pselect').value = '';
  document.getElementById('modelselect').disabled = true;
  document.getElementById('modelinfo').style.display = 'none';
  setConnBtn('wait', '等待配置');
  updateModeTip(null);
  localStorage.removeItem('img_api_config_v2');
  hideError();
}

// ---- Image Upload ----
(function initUpload() {
  var upload = document.getElementById('upload');
  var finp = document.getElementById('finp');
  upload.addEventListener('click', function() { finp.click(); });
  upload.addEventListener('dragover', function(e) { e.preventDefault(); upload.classList.add('drag'); });
  upload.addEventListener('dragleave', function() { upload.classList.remove('drag'); });
  upload.addEventListener('drop', function(e) {
    e.preventDefault(); upload.classList.remove('drag');
    if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
  });
  finp.addEventListener('change', function() { if (finp.files.length > 0) handleFile(finp.files[0]); });
})();

function handleFile(file) {
  if (!file.type.match(/image\/(jpg|jpeg|png|webp)/)) { showError('仅支持 JPG / PNG / WebP 格式'); return; }
  var reader = new FileReader();
  reader.onload = function(e) { currentImageData = e.target.result; showPreview(file, e.target.result); };
  reader.readAsDataURL(file);
}

function showPreview(file, dataUrl) {
  document.getElementById('uempty').style.display = 'none';
  document.getElementById('uprev').style.display = 'flex';
  document.getElementById('previmg').src = dataUrl;
  document.getElementById('fname').textContent = file.name;
  document.getElementById('fsize').textContent = (file.size / 1024).toFixed(1) + ' KB';
  document.getElementById('upload').classList.add('ok');
  hideError();
}

function reUpload() { document.getElementById('finp').click(); }

function showError(msg) { document.getElementById('errormsg').textContent = msg; document.getElementById('errormsg').style.display = 'block'; }
function hideError() { document.getElementById('errormsg').style.display = 'none'; }

// ---- Image Size Selection (Aspect Ratio + K Resolution) ----
var SIZE_BASES = {
  '1:1':  { w: 1024, h: 1024 },
  '4:3':  { w: 1024, h: 768 },
  '3:4':  { w: 768, h: 1024 },
  '16:9': { w: 1024, h: 576 },
  '9:16': { w: 576, h: 1024 }
};
var CURRENT_AR = '16:9';
var CURRENT_K = 1;
var CURRENT_SIZE = '1024x576';

function selAspect(el) {
  document.querySelectorAll('.sz-btn').forEach(function(b) { b.classList.remove('on'); });
  el.classList.add('on');
  CURRENT_AR = el.getAttribute('data-ar');
  var isCustom = CURRENT_AR === 'custom';
  document.getElementById('ar-custom').style.display = isCustom ? 'inline' : 'none';
  if (isCustom) {
    onCustomAr();
  } else {
    updateSize();
  }
}

function onCustomAr() {
  if (CURRENT_AR !== 'custom') return;
  var w = parseInt(document.getElementById('ar-w').value);
  var h = parseInt(document.getElementById('ar-h').value);
  if (w && h && w >= 256 && h >= 256 && w <= 8192 && h <= 8192) {
    SIZE_BASES['custom'] = { w: w, h: h };
    updateSize();
  }
}

function selK(el) {
  document.querySelectorAll('.k-btn').forEach(function(b) { b.classList.remove('on'); });
  el.classList.add('on');
  var val = el.getAttribute('data-k');
  if (val === 'custom') {
    document.getElementById('k-custom').style.display = 'inline';
    onCustomK();
  } else {
    document.getElementById('k-custom').style.display = 'none';
    CURRENT_K = parseInt(val);
    if (CURRENT_AR !== 'custom') {
      updateSize();
    }
  }
}

function onCustomK() {
  var v = parseInt(document.getElementById('k-input').value);
  if (v && v >= 1 && v <= 16) {
    CURRENT_K = v;
    if (CURRENT_AR !== 'custom') {
      updateSize();
    }
  }
}

function updateSize() {
  var base = SIZE_BASES[CURRENT_AR];
  if (!base) return;
  var w = base.w * CURRENT_K;
  var h = base.h * CURRENT_K;
  CURRENT_SIZE = w + 'x' + h;
  document.getElementById('sz-display').textContent = CURRENT_AR + ' + ' + CURRENT_K + 'K = ' + CURRENT_SIZE;
}

// ---- Image Count Selection ----
var CURRENT_N = 1;

function selN(el) {
  document.querySelectorAll('.n-btn').forEach(function(b) { b.classList.remove('on'); });
  el.classList.add('on');
  var val = el.getAttribute('data-n');
  if (val === 'custom') {
    document.getElementById('n-custom').style.display = 'inline';
  } else {
    document.getElementById('n-custom').style.display = 'none';
    CURRENT_N = parseInt(val);
    document.getElementById('n-display').textContent = CURRENT_N;
  }
}

function onCustomN() {
  var v = parseInt(document.getElementById('n-input').value);
  if (v && v >= 1 && v <= 10) {
    CURRENT_N = v;
    document.getElementById('n-display').textContent = v;
  }
}


function buildPrompt(userPrompt) {
  var qualityTags = '8K ultra HD, professional character sheet, uniform soft studio lighting, pure white background, no shadows, no text, no watermark, no logo';
  var layoutDesc = 'COMPOSITE IMAGE with two sections side by side on a single canvas. LEFT SECTION: A close-up portrait of the character from shoulders and above, showing detailed facial features, hair texture, and skin details. RIGHT SECTION: Three full-body views of the SAME character in A-pose standing position, arranged vertically or side by side: (1) front view facing camera, (2) 45-degree side view, (3) back view. All figures must have identical face, hairstyle, body proportions, and clothing. Clean white background, no shadows.';
  var refNote = currentImageData ? ', using the uploaded character image as reference for consistent style, face, and clothing design' : '';
  return userPrompt + refNote + '. ' + layoutDesc + ' ' + qualityTags;
}

// ---- Check Generate Ready ----
function checkGenReady() {
  var prompt = document.getElementById('promptInput').value.trim();
  var key = document.getElementById('apikey').value.trim();
  var ep = document.getElementById('apiendpoint').value.trim();
  var model = document.getElementById('modelselect').value;
  var platform = document.getElementById('pselect').value;
  var pf = platform ? PLATFORMS[platform] : null;
  var canGen = prompt && key && ep && model;
  if (pf && !pf.imgGen) canGen = false;
  document.getElementById('genbtn').disabled = !canGen;
}

// ---- Image Generation ----
async function genImage() {
  var key = document.getElementById('apikey').value.trim();
  var ep = document.getElementById('apiendpoint').value.trim();
  var model = document.getElementById('modelselect').value;
  var userPrompt = document.getElementById('promptInput').value.trim();
  var platform = document.getElementById('pselect').value;
  var pf = platform ? PLATFORMS[platform] : null;

  if (!key || !ep || !model || !userPrompt) { showError('请完善 API 配置和提示词'); return; }
  if (pf && !pf.imgGen) { showError('该平台不支持图像生成，请选择其他平台'); return; }

  showLoading(true);
  hideError();
  document.getElementById('result-empty').style.display = 'none';
  document.getElementById('result-content').style.display = 'none';

  var startTime = Date.now();
  var genPrompt = buildPrompt(userPrompt);

  try {
    var imageUrl = '';

    // 阿里百炼 - 通义万相
    if (platform === '阿里百炼') {
      // 可灵 Kling 系列使用异步 API
      if (model.indexOf('kling/') === 0) {
        var klingUrl = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/image-generation/generation';
        var content = [{ text: genPrompt }];
        if (currentImageData) {
          content.unshift({ image: currentImageData });
        }
        var klingBody = {
          model: model,
          input: { messages: [{ role: 'user', content: content }] },
          parameters: { n: CURRENT_N, aspect_ratio: '1:1', resolution: '1k' }
        };
        var resp = await fetch(klingUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key, 'X-DashScope-Async': 'enable' },
          body: JSON.stringify(klingBody)
        });
        if (!resp.ok) { var e = await resp.text().catch(function() { return ''; }); throw new Error('HTTP ' + resp.status + ': ' + e.substring(0, 100)); }
        var result = await resp.json();
        var taskId = result.output && result.output.task_id;
        if (!taskId) throw new Error('未获取到任务ID');
        // 轮询任务结果
        var pollUrl = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/image-generation/generation/' + taskId;
        for (var i = 0; i < 60; i++) {
          await new Promise(function(r) { setTimeout(r, 2000); });
          var pollResp = await fetch(pollUrl, {
            headers: { 'Authorization': 'Bearer ' + key }
          });
          if (!pollResp.ok) continue;
          var pollResult = await pollResp.json();
          var status = pollResult.output && pollResult.output.task_status;
          if (status === 'SUCCEEDED') {
            var results = pollResult.output.results;
            if (results && results[0]) {
              imageUrl = results[0].image || results[0].url;
              if (!imageUrl && results[0].content) {
                var c = results[0].content;
                if (Array.isArray(c)) {
                  var img = c.find(function(x) { return x.image; });
                  if (img) imageUrl = img.image;
                }
              }
            }
            break;
          } else if (status === 'FAILED') {
            throw new Error('可灵AI生成失败: ' + (pollResult.output.message || '未知错误'));
          }
        }
        if (!imageUrl) throw new Error('可灵AI生成超时，请稍后重试');
      } else if (model.indexOf('wan2.7') === 0 || model === 'wan2.6-image' || model === 'wan2.5-i2i-preview') {
        var wanUrl = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation';
        var content = [{ text: genPrompt }];
        if (currentImageData) {
          content.unshift({ image: currentImageData });
        }
        var wanBody = {
          model: model,
          input: {
            messages: [{ role: 'user', content: content }]
          },
          parameters: { size: CURRENT_SIZE.replace('x', '*'), n: CURRENT_N }
        };
        var resp = await fetch(wanUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
          body: JSON.stringify(wanBody)
        });
        if (!resp.ok) { var e = await resp.text().catch(function() { return ''; }); throw new Error('HTTP ' + resp.status + ': ' + e.substring(0, 100)); }
        var result = await resp.json();
        // 尝试多种响应格式
        var choices = result.output && result.output.choices;
        if (choices && choices[0]) {
          var content = choices[0].content || (choices[0].message && choices[0].message.content) || [];
          if (typeof content === 'string') {
            imageUrl = content;
          } else if (Array.isArray(content)) {
            var imgItem = content.find(function(c) { return c.image; }) || content.find(function(c) { return c.image_url && c.image_url.url; });
            if (imgItem) imageUrl = imgItem.image || (imgItem.image_url && imgItem.image_url.url);
          }
        }
        // 兼容旧版响应格式
        if (!imageUrl && result.output && result.output.results) {
          if (result.output.results[0]) imageUrl = result.output.results[0].url || result.output.results[0].image;
        }
      } else {
        // wanx2.1 系列使用 V1 文生图 API
        var wanxUrl = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis';
        var wanxBody = {
          model: model,
          input: { prompt: genPrompt },
          parameters: { size: CURRENT_SIZE.replace('x', '*'), n: CURRENT_N }
        };
        if (currentImageData) {
          wanxBody.input.ref_image = currentImageData;
        }
        var resp = await fetch(wanxUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
          body: JSON.stringify(wanxBody)
        });
        if (!resp.ok) { var e = await resp.text().catch(function() { return ''; }); throw new Error('HTTP ' + resp.status + ': ' + e.substring(0, 100)); }
        var result = await resp.json();
        if (result.output && result.output.results && result.output.results[0]) {
          imageUrl = result.output.results[0].url;
        }
      }
    }
    // 智谱 AI - CogView API
    else if (platform === '智谱') {
      var zgUrl = ep.replace(/\/+$/, '') + '/images/generations';
      var zgBody = { model: model, prompt: genPrompt, n: CURRENT_N, size: CURRENT_SIZE, response_format: 'b64_json' };
      var resp = await fetch(zgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify(zgBody)
      });
      if (!resp.ok) { var e = await resp.text().catch(function() { return ''; }); throw new Error('HTTP ' + resp.status + ': ' + e.substring(0, 100)); }
      var result = await resp.json();
      if (result.data && result.data[0]) {
        if (result.data[0].b64_json) imageUrl = 'data:image/png;base64,' + result.data[0].b64_json;
        else if (result.data[0].url) imageUrl = result.data[0].url;
      }
    }
    // 豆包
    else if (platform === '豆包') {
      var dbUrl = ep.replace(/\/+$/, '') + '/images/generations';
      var dbBody = { model: model, prompt: genPrompt, n: CURRENT_N, size: CURRENT_SIZE, response_format: 'b64_json' };
      if (currentImageData && model.indexOf('seedream') >= 0) {
        dbBody.reference_images = [{ image: currentImageData }];
      }
      var resp = await fetch(dbUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify(dbBody)
      });
      if (!resp.ok) { var e = await resp.text().catch(function() { return ''; }); throw new Error('HTTP ' + resp.status + ': ' + e.substring(0, 100)); }
      var result = await resp.json();
      if (result.data && result.data[0]) {
        if (result.data[0].b64_json) imageUrl = 'data:image/png;base64,' + result.data[0].b64_json;
        else if (result.data[0].url) imageUrl = result.data[0].url;
      }
    }
    // OpenAI / 硅基流动 / 自定义 - 标准OpenAI兼容
    else {
      var url = ep.replace(/\/+$/, '') + '/images/generations';
      var body = { model: model, prompt: genPrompt, n: CURRENT_N, size: CURRENT_SIZE, response_format: 'b64_json' };

      // 硅基流动 FLUX/SD 系列支持参考图
      if (platform === '硅基流动' && currentImageData) {
        body.image = currentImageData;
      }

      var resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify(body)
      });
      if (!resp.ok) { var e = await resp.text().catch(function() { return ''; }); throw new Error('HTTP ' + resp.status + ': ' + e.substring(0, 100)); }
      var result = await resp.json();
      if (result.data && result.data[0]) {
        if (result.data[0].b64_json) imageUrl = 'data:image/png;base64,' + result.data[0].b64_json;
        else if (result.data[0].url) imageUrl = result.data[0].url;
      }
    }

    if (!imageUrl) throw new Error('API 返回格式异常，未能获取图片');

    var elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    showLoading(false);
    document.getElementById('result-content').style.display = 'block';
    document.getElementById('result-img').src = imageUrl;
    document.getElementById('gen-time').textContent = elapsed + ' 秒';
    generatedImageUrl = imageUrl;

  } catch(e) {
    showLoading(false);
    document.getElementById('result-empty').style.display = 'block';
    document.getElementById('result-empty').querySelector('p').textContent = '生成失败：' + e.message;
    showError('生成失败：' + e.message);
  }
}

function showLoading(show) {
  document.getElementById('result-loading').style.display = show ? 'block' : 'none';
  document.getElementById('loading-text').textContent = show ? 'AI 正在生成图片，请稍候（通常 10-30 秒）...' : '';
}

// ---- Download & Reset ----
function downloadResult(fmt) {
  var img = document.getElementById('result-img');
  if (!img || !img.src) return;
  var link = document.createElement('a');
  link.download = 'character_closeup_threeview.' + fmt;
  if (img.src.indexOf('data:') === 0) { link.href = img.src; }
  else {
    var c = document.createElement('canvas');
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    c.getContext('2d').drawImage(img, 0, 0);
    link.href = fmt === 'jpg' ? c.toDataURL('image/jpeg', 0.92) : c.toDataURL('image/png');
  }
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
}

function resetResult() {
  generatedImageUrl = '';
  document.getElementById('result-content').style.display = 'none';
  document.getElementById('result-empty').style.display = 'block';
  document.getElementById('result-empty').querySelector('p').textContent = '配置好模型并点击"生成图片"后，结果将显示在这里';
  document.getElementById('gen-time').textContent = '-';
  document.getElementById('genbtn').disabled = false;
}

// ---- API Help Modal ----
var API_HELP_HTML = '';
(function buildApiHelp() {
  var helpData = [
    {
      name: '阿里百炼（通义万相）',
      color: '#c4b5fd',
      steps: [
        '① 打开 <a href="https://bailian.console.aliyun.com/" target="_blank" rel="noopener">阿里云百炼控制台</a> → 右上角选择「华北2（北京）」地域',
        '② 左侧导航「API Key 管理」→ 点击「创建 API Key」→ 复制并保存',
        '③ 在控制台左侧「业务空间」查看 WorkspaceId（用于 wan2.7 系列 API 端点）',
        '④ wan2.7 系列使用 V2 多模态 API（支持参考图），wanx2.1 系列使用 V1 文生图 API',
        '⑤ 推荐模型：wan2.7-image-pro（旗舰4K）、可灵Kling V3（多参考图）、wan2.6-image（图文混排）',
      ],
      ep: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation',
      note: 'wan2.7系列使用V2多模态API（端点需替换WorkspaceId）；wanx2.1系列使用V1文生图API',
      models: PLATFORMS['阿里百炼'].models
    },

    {
      name: '硅基流动（SiliconFlow）',
      color: '#86efac',
      steps: [
        '① 打开 <a href="https://cloud.siliconflow.com/" target="_blank" rel="noopener">SiliconCloud 平台</a> → 注册/登录',
        '② 进入「API 密钥」页面 → 点击「新建 API 密钥」→ 复制密钥',
        '③ 新用户注册即赠 14 元余额，可用于所有模型',
        '④ 本工具自动使用 OpenAI 兼容的 /v1/images/generations 接口',
        '⑤ 推荐模型：FLUX.1-pro（画质顶级）、FLUX.1-dev（性价比高）',
      ],
      ep: 'https://api.siliconflow.cn/v1',
      note: '支持 OpenAI 兼容的图像生成 API；FLUX/SD系列支持参考图，通过 image 参数传入',
      models: PLATFORMS['硅基流动'].models
    },
    {
      name: '豆包（火山引擎）',
      color: '#fde68a',
      steps: [
        '① 打开 <a href="https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey" target="_blank" rel="noopener">火山引擎方舟平台 → API Key 管理</a>',
        '② 点击「创建 API Key」→ 复制并妥善保存密钥',
        '③ 进入「模型广场」找到图像生成模型并开通',
        '④ 新用户赠 50 万 tokens 体验额度',
        '⑤ 推荐模型：Seedream 5.0 Lite（支持参考图，性价比高）',
      ],
      ep: 'https://ark.cn-beijing.volces.com/api/v3',
      note: '需先开通对应模型服务才可使用；Seedream 系列支持参考图生图，通过 reference_images 参数传入',
      models: PLATFORMS['豆包'].models
    },

    {
      name: '智谱 AI',
      color: '#93c5fd',
      steps: [
        '① 打开 <a href="https://open.bigmodel.cn/usercenter/apikeys" target="_blank" rel="noopener">智谱 AI 开放平台 → API Keys</a>',
        '② 登录后点击「添加 API Key」→ 复制密钥',
        '③ 新用户赠 500 万 tokens 体验额度',
        '④ CogView-4 为最新图像生成模型，布局理解能力突出',
        '⑤ 非常适合多视图布局生成，推荐尝试',
      ],
      ep: 'https://open.bigmodel.cn/api/paas/v4',
      note: 'CogView-4 使用标准 images/generations 接口',
      models: PLATFORMS['智谱'].models
    },






    {
      name: '自定义',
      color: '#6b7280',
      steps: [
        '① 自行配置 API Key 和 API 端点地址',
        '② 端点需支持 OpenAI 兼容的 /v1/images/generations 接口',
        '③ 模型名称需与平台支持的模型 ID 一致',
        '④ 支持自定义端点的平台：兼容 OpenAI 图像生成 API 格式的任意服务',
      ],
      ep: '自行填写',
      note: '需确保端点兼容 OpenAI 图像生成 API 格式',
      models: []
    }
  ];

  var html = '';
  helpData.forEach(function(pf) {
    html += '<div class="api-acc">';
    html += '<div class="api-acc-h" onclick="toggleApiAcc(this)">';
    html += '<span style="color:' + pf.color + ';font-weight:600;font-size:14px">' + pf.name + '</span>';
    html += '<svg class="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    html += '</div><div class="api-acc-bd">';
    pf.steps.forEach(function(s) { html += '<div>' + s + '</div>'; });
    html += '<div class="ep-box"><span class="lbl">API 端点</span>：<span class="val">' + pf.ep + '</span></div>';
    if (pf.note) html += '<div style="margin-top:6px;font-size:11px;color:#fbbf24">' + pf.note + '</div>';
    if (pf.models.length > 0) {
      html += '<div style="margin-top:8px;font-size:11px;line-height:1.8">';
      html += '<div style="color:#fbbf24;font-weight:600;margin-bottom:4px">支持模型</div>';
      pf.models.forEach(function(m) {
        var ratingBadge = '';
        if (m.rating === '⭐⭐⭐') ratingBadge = '<span style="color:#fbbf24;font-weight:600">⭐⭐⭐</span>';
        else if (m.rating === '⭐⭐') ratingBadge = '<span style="color:#a7f3d0;font-weight:500">⭐⭐</span>';
        else if (m.rating === '⭐') ratingBadge = '<span style="color:#9ca3af">⭐</span>';
        else ratingBadge = '<span style="color:#6b7280">—</span>';
        html += '<div style="padding:5px 8px;margin-bottom:4px;background:rgba(139,92,246,.06);border-radius:4px;border:1px solid rgba(139,92,246,.12)">';
        html += '<div style="color:#d1d5db;font-weight:500">' + ratingBadge + m.label + '</div>';
        html += '<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">';
        html += '<span style="color:#34d399;font-size:10px">' + m.free + '</span>';
        html += '<span style="color:#fbbf24;font-size:10px">' + m.price + '</span>';
        html += '</div>';
        if (m.note) html += '<div style="color:#9ca3af;font-size:10px;margin-top:2px">' + m.note + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div></div>';
  });

  // 注释说明（连接测试 + 安全 + 价格）
  html += '<div style="margin-top:16px;padding:14px;background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.25);border-radius:8px;font-size:12px;line-height:1.8;color:#d1d5db">';
  // 连接测试说明
  html += '<div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(251,191,36,.15)">';
  html += '<div style="color:#fbbf24;font-weight:600;margin-bottom:6px;display:flex;align-items:center;gap:6px">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>';
  html += '<span>连接测试说明</span></div>';
  html += '<div class="tip-item">1. 测试按钮调用的是 <strong>/chat/completions</strong> 接口，而当前选择的模型是图像生成模型，部分平台图像模型未注册在此接口下，可能导致测试不通；</div>';
  html += '<div class="tip-item">2. 阿里百炼已自动使用 <strong>qwen-turbo</strong> 模型进行连接测试，可正常验证 API Key 有效性；</div>';
  html += '<div class="tip-item">3. 实际图片生成走的是 <strong>/images/generations</strong> 接口（阿里百炼为通义万相专用API），测试不通不影响正常生成；</div>';
  html += '<div class="tip-item">4. 如果测试不通，建议直接填写好 API Key 和模型后，点击「生成图片」验证能否正常出图；</div>';
  html += '<div class="tip-item">5. 如生成图片仍失败，请检查 API Key 是否有效、模型是否已开通、端点地址是否正确。</div>';
  html += '</div>';
  // 安全说明
  html += '<div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(251,191,36,.15)">';
  html += '<div style="color:#fbbf24;font-weight:600;margin-bottom:6px;display:flex;align-items:center;gap:6px">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
  html += '<span>API Key 安全说明</span></div>';
  html += '<div class="tip-item">1. 你填入的 API Key 和端点仅保存在浏览器 localStorage 中，不会写入硬盘或 Cookie；</div>';
  html += '<div class="tip-item">2. 配置信息仅发送至你指定的 API 端点用于身份验证，不会上传至任何第三方服务器；</div>';
  html += '<div class="tip-item">3. 普通刷新（F5 / Ctrl+R）不会清空配置，可继续使用；</div>';
  html += '<div class="tip-item">4. 关闭标签页后重新打开，配置依然保留，无需重复填写；</div>';
  html += '<div class="tip-item">5. 点击页面上方「清空配置」按钮即可手动清除。</div>';
  html += '</div>';
  // 价格与模型说明
  html += '<div>';
  html += '<div style="color:#fbbf24;font-weight:600;margin-bottom:6px;display:flex;align-items:center;gap:6px">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  html += '<span>价格与模型说明</span></div>';
  html += '<div class="tip-item">1. 免费额度为各平台新用户活动，具体额度和有效期以平台官网为准；</div>';
  html += '<div class="tip-item">2. 价格信息仅供参考，各平台可能随时调整，请以平台官网实时价格为准；</div>';
  html += '<div class="tip-item">3. 效果标注 ⭐⭐⭐ 为顶级推荐，⭐⭐ 为优秀，⭐ 为良好，— 为不支持图像生成；</div>';
  html += '<div class="tip-item">4. 多视图布局生成对模型要求较高，推荐优先使用 CogView-4、FLUX.1-pro、通义万相-增强版。</div>';
  html += '</div></div>';

  API_HELP_HTML = html;
})();

function showApiHelp() {
  document.getElementById('api-help-overlay').style.display = 'flex';
  document.getElementById('api-help-content').innerHTML = API_HELP_HTML;
}

function closeApiHelp(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('api-help-overlay').style.display = 'none';
}

function showSponsor() { document.getElementById('sponsor-overlay').style.display = 'flex'; }
function closeSponsor(e) { if (e && e.target !== e.currentTarget) return; document.getElementById('sponsor-overlay').style.display = 'none'; }

function toggleApiAcc(el) {
  var allHdrs = document.querySelectorAll('.api-acc-h');
  var allBds = document.querySelectorAll('.api-acc-bd');
  var isOpen = el.classList.contains('on');
  allHdrs.forEach(function(h) { h.classList.remove('on'); });
  allBds.forEach(function(b) { b.classList.remove('on'); });
  if (!isOpen) {
    el.classList.add('on');
    el.nextElementSibling.classList.add('on');
  }
}

// ---- Footer Toggle ----
function toggleFoot() {
  var cont = document.getElementById('fcont');
  var arr = document.getElementById('f-arr');
  var card = document.querySelector('.d4');
  if (cont.style.display === 'none' || cont.style.display === '') { cont.style.display = 'block'; arr.classList.add('on'); card.classList.remove('collapsed'); }
  else { cont.style.display = 'none'; arr.classList.remove('on'); card.classList.add('collapsed'); }
}

// ---- Image Stitching ----
function stitchLoadImg(idx, input) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    _stitchImages[idx] = e.target.result;
    document.getElementById('stitch-empty' + idx).style.display = 'none';
    document.getElementById('stitch-prev' + idx).style.display = 'flex';
    document.getElementById('stitch-img' + idx).src = e.target.result;
    document.getElementById('stitch-upload' + idx).classList.add('ok');
    checkStitchReady();
  };
  reader.readAsDataURL(file);
}

function checkStitchReady() {
  if (_stitchState === 'done') return;
  document.getElementById('stitch-btn').disabled = !(_stitchImages[1] && _stitchImages[2]);
}

function stitchSetDir(dir) {
  _stitchDir = dir;
  document.getElementById('stitch-dir-h').classList.toggle('on', dir === 'h');
  document.getElementById('stitch-dir-v').classList.toggle('on', dir === 'v');
  if (_stitchState === 'done') {
    _stitchState = 'ready';
    document.getElementById('stitch-btn').innerHTML = '重新拼接';
    document.getElementById('stitch-btn').disabled = false;
  }
}

function doStitch() {
  if (_stitchState === 'done') {
    _stitchImages = {}; _stitchState = 'idle';
    document.getElementById('stitch-upload1').classList.remove('ok');
    document.getElementById('stitch-upload2').classList.remove('ok');
    document.getElementById('stitch-prev1').style.display = 'none';
    document.getElementById('stitch-prev2').style.display = 'none';
    document.getElementById('stitch-empty1').style.display = 'flex';
    document.getElementById('stitch-empty2').style.display = 'flex';
    document.getElementById('stitch-img1').src = '';
    document.getElementById('stitch-img2').src = '';
    document.getElementById('stitch-result').style.display = 'none';
    document.getElementById('stitch-err').style.display = 'none';
    document.getElementById('stitch-btn').innerHTML = '开始拼接';
    document.getElementById('stitch-btn').disabled = true;
    return;
  }
  if (!_stitchImages[1] || !_stitchImages[2]) return;
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var img1 = new Image(); var img2 = new Image(); var loaded = 0;
  img1.onload = function() { loaded++; if (loaded === 2) renderStitch(); };
  img2.onload = function() { loaded++; if (loaded === 2) renderStitch(); };
  img1.onerror = function() { showStitchErr('图1 加载失败'); };
  img2.onerror = function() { showStitchErr('图2 加载失败'); };
  img1.src = _stitchImages[1]; img2.src = _stitchImages[2];
  function renderStitch() {
    if (_stitchDir === 'h') {
      var maxH = Math.max(img1.height, img2.height);
      var w1 = img1.width * (maxH / img1.height);
      var w2 = img2.width * (maxH / img2.height);
      canvas.width = w1 + w2; canvas.height = maxH;
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img1, 0, 0, w1, maxH);
      ctx.drawImage(img2, w1, 0, w2, maxH);
    } else {
      var maxW = Math.max(img1.width, img2.width);
      var h1 = img1.height * (maxW / img1.width);
      var h2 = img2.height * (maxW / img2.width);
      canvas.width = maxW; canvas.height = h1 + h2;
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img1, 0, 0, maxW, h1);
      ctx.drawImage(img2, 0, h1, maxW, h2);
    }
    _stitchState = 'done';
    document.getElementById('stitch-output').src = canvas.toDataURL('image/png');
    document.getElementById('stitch-result').style.display = 'block';
    document.getElementById('stitch-err').style.display = 'none';
    document.getElementById('stitch-btn').innerHTML = '清除图片';
  }
}

function showStitchErr(msg) { document.getElementById('stitch-err').textContent = msg; document.getElementById('stitch-err').style.display = 'block'; }

function stitchDownload(fmt) {
  var img = document.getElementById('stitch-output');
  if (!img.src) return;
  var link = document.createElement('a');
  link.download = 'stitch_result.' + fmt;
  if (fmt === 'jpg') { var c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight; c.getContext('2d').drawImage(img, 0, 0); link.href = c.toDataURL('image/jpeg', 0.92); }
  else { link.href = img.src; }
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', function() {
  restoreApiConfig();
  // checkGenReady 由 HTML oninput/onchange 触发，无需重复绑定
});

document.addEventListener('contextmenu', function(e) { e.preventDefault(); });