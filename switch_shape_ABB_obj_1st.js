//switch_shape_ABB_obj 1st
var preload = {
    type: 'preload',
    images:['bedroom.png','blackspike.png','bluetriangle.png','browntrapezoid.png',
    'closet.png','cyanoctagon.png','field.png','grayoval.png','greencircle.png',
    'kitchen.png','library.png','limepentagon.png','orangeflower.png','pinkheart.png',
    'pool.png','purplesquare.png','reddiamond.png','sign.png','white.png','yellowstar.png',
    "https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png",
    "https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png"] 
};
  
var consent = {
  type: 'external-html',
  url: 'consent_new.html',
  cont_btn: "start",
};

var fullscreen = {
  type: 'fullscreen',
  fullscreen_mode: true,
  message:'<p>点击下方按钮后将进入全屏模式</p>',
  button_label: '开始实验'
}

var fullscreen_exit = {
  type: 'fullscreen',
  fullscreen_mode: false,
}


  


    
var task_explanation = {
  type: 'html-keyboard-response',
  stimulus: `
    <div style="width: 45em;">
    <p>在实验中，你需要在两张图片中选择与给定提示相匹配的图片。</p>
    <p>
    这两张图片会依次呈现，你需要在左侧和右侧的图片中进行选择。<b>每张图片会在呈现很短的时间之后消失，请集中注意力。</b>
    </p>

    <p>你需要在键盘上按“F”或“J”键来选择图片。
    <b>“F”键</b>对应<b><i>左侧</i></b>的图片，<b>“J”键</b>对应<b><i>右侧</i></b>的图片。</p>
  
    <p><b>请注意：</b>你只能在两张图片都消失后才能进行选择。请尽量又快又准地进行选择；<b>按键后你将无法修改答案。</b>
    </p>
    <p>请将你的左右食指分别放在“F”键和“J”键上。</p>
    <p>如果你已理解实验任务并准备好开始实验，请按任意键继续。</p>
    </div>`,
      
};
    
    
var catch_ex1 = {
  type: 'html-keyboard-response',
  prompt: "<p style='position: absolute;left:50%;top: 15%; margin-left:-175px'>你想要<b>去游泳</b>，请寻找你可以去游泳的地方。</p>",
  timeline: [
    {
      stimulus: `
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>`,
    },
    {
      stimulus: '<img src="field.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-150px"/>',
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 1700,
      trial_duration: 2200
    },
    {
      stimulus: '<img src="pool.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-150px"/>',
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 1700,
      trial_duration:2200
    },
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style= "position: absolute;left: 35%;top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style= "position: absolute;left: 65%;top:50%; margin-left:-150px; margin-top:-150px"/>`,
      choices: ['f','j'],
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-175px'>你想要<b>去游泳</b>，请寻找你可以去游泳的地方。</p>
      <p style='position: absolute;left:50%;top: 75%; margin-left:-190px'>请选择你可以去游泳的图片，按下对应的F或J键。</p>
      <p style='position: absolute;left:50%;top: 80%; margin-left:-195px'>（按“F”键选择左侧图片，或按“J”键选择右侧图片）</p>
      `,
      data: {test_type: 'catch_1'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'j')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    },
],
};
    
var catch_ex2 = {
  type: 'html-keyboard-response',
  prompt: "<p style='position: absolute;left:50%;top: 15%; margin-left:-175px'>你想要<b>吃点东西</b>，请寻找你可以去吃东西的地方。</p>",
  timeline: [
    {
      stimulus: `
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>`,
    },
    {
      stimulus: '<img src="kitchen.png" width="300" height="300" style= "position: absolute;left:35%;top:50%; margin-left:-150px; margin-top:-150px"/>',
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 1700,
      trial_duration: 2200
    },
    {
      stimulus: '<img src="closet.png" width="300" height="300" style= "position: absolute;left:65%;top:50%; margin-left:-150px; margin-top:-150px"/>',
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 1700,
      trial_duration:2200
    },
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style= "position: absolute;left: 35%;top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style= "position: absolute;left: 65%;top:50%; margin-left:-150px; margin-top:-150px"/>`,
      choices: ['f','j'],
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-175px'>你想要<b>吃点东西</b>，请寻找你可以去吃东西的地方。</p>
      <p style='position: absolute;left:50%;top: 75%; margin-left:-190px'>请选择你可以去吃东西的图片，按下对应的F或J键。</p>
      <p style='position: absolute;left:50%;top: 80%; margin-left:-195px'>（按“F”键选择左侧图片，或按“J”键选择右侧图片）</p>
      `,
      data: {test_type: 'catch_2'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    },
    ],
};
    
var catch_ex3 = {
  type: 'html-keyboard-response',
  prompt:"<p style='position: absolute;left:50%;top: 15%; margin-left:-175px'>你想要<b>睡觉</b>，请寻找你可以去睡觉的地方。</p>",
  timeline: [
    {
      stimulus: `
      <p style='color:red; position: absolute;left:50%;top: 20%; margin-left:-75px'>请按任意键继续。</p>`,
    },
    {
      stimulus: '<img src="bedroom.png" width="300" height="300" style= "position: absolute;left:35%;top:50%; margin-left:-150px; margin-top:-150px"/>',
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 1700,
      trial_duration: 2200
    },
    {
      stimulus: '<img src="library.png" width="300" height="300" style= "position: absolute;left:65%;top:50%; margin-left:-150px; margin-top:-150px"/>',
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 1700,
      trial_duration:2200
    },
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style= "position: absolute;left:35%;top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style= "position: absolute;left:65%;top:50%; margin-left:-150px; margin-top:-150px"/>`,
      choices: ['f','j'],
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-175px'>你想要<b>睡觉</b>，请寻找你可以去睡觉的地方。</p>
      <p style='position: absolute;left:50%;top: 75%; margin-left:-190px'>请选择你可以去睡觉的图片，按下对应的F或J键。</p>
      <p style='position: absolute;left:50%;top: 80%; margin-left:-195px'>（按“F”键选择左侧图片，或按“J”键选择右侧图片）</p>
      `,
      data: {test_type: 'catch_3'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    },
    ],
};
    
var catch_ex = {
  timeline: [
    catch_ex1,
    catch_ex2,
    catch_ex3
    ]
};
    
var description = {
  type: 'external-html',
  url: 'backstory_new.html',
  cont_btn: 'start'
};
    
var habituation = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline: [
    {
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你会看到很多路标的示例，<b>这些路标都代表对贝拉来说安全的道路。</b>每个路标会在呈现几秒后消失。 这些路标会持续呈现两分钟左右，请观看所有出现的路标。</p>
      <p style=color:red>请按任意键开始观看。</p>
      `,
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute;left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute;left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="limepentagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute;left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="orangeflower.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="pinkheart.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="blackspike.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="cyanoctagon.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="purplesquare.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-112px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:-32px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      stimulus: '<img src="sign.png" width= "304" height="280" style= "position: absolute; left: 50%; top:50%; margin-left:-152px; margin-top:-140px"/><img src="greencircle.png" width="67" height="67" style= "position: absolute; left: 50%; top:50%; margin-left:48px; margin-top:-73px"/>',
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    
    {
      prompt: null,
      stimulus: '<p style=color:red> 请按任意键继续。</p>',
      choices: jsPsych.ALL_KEYS
    }
    ],
};

var trial_1 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute; left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_1'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}
    
var trial_2 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="pinkheart.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="pinkheart.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_2'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'j')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial_3 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="bluetriangle.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_3'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'j')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial_4 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="pinkheart.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="pinkheart.png" width="67" height="67"" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_4'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'j')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial_5 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_5'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial_6 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_6'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial_7 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="grayoval.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="reddiamond.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_7'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'j')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial_8 = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  timeline:[
    {
      prompt: null,
      choices: jsPsych.ALL_KEYS,
      stimulus: `
      <p>你带着小兔子贝拉安全地穿过森林回家。你们走到了一个岔路口，每条路上都有一个路标。</p>
      <p style=color:red>请按任意键继续。</p>
      `,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:35%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute; left:35%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -112px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="browntrapezoid.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: -32px"/>`,
      trial_duration: 600
    },
    {
      stimulus: `
      <img src="sign.png" width="304" height="280" style="position: absolute; left:65%;top:50%; margin-top: -140px; margin-left: -152px"/>
      <img src="yellowstar.png" width="67" height="67" style= "position: absolute;left:65%;top:50%; margin-top: -73px; margin-left: 48px"/>`,
      trial_duration: 600
    },
    {
      prompt:null,
      stimulus:'<img src="white.png">',
      trial_duration:1000,
    },
    
    {
      stimulus: `
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/ed0aa87c11294a7ab2af/1024/F.png" width="300" height="300" style="position: absolute; left:35%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <img src="https://cloud.tsinghua.edu.cn/thumbnail/0a9de422333a4d0081fd/1024/J.png" width="300" height="300" style="position: absolute; left:65%; top:50%; margin-left:-150px; margin-top:-150px"/>
      <p style="position: absolute; left: 50%; top: 75%;margin-left:-175px">请选择指示安全道路的路标，按下对应的F或J键。</p>
      <p style="color:red; position: absolute; left: 50%; top: 80%;margin-left:-175px"><b>（按F键选择左侧的标志，按J键选择右侧的标志）</b>`,
      choices: ['f','j'],
      data: {test_type: 'trial_8'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
  ]
}

var trial = {
  timeline: [trial_1, trial_2, trial_3, trial_4, trial_5, trial_6, trial_7, trial_8]
}

var end_q2 = {
  type: 'survey-text',
  questions:[
    {
      prompt: "您的年龄是？",
      required: true,
      name: 'age',
    },
    {
      prompt:'除了普通话外，您是否还会说其他方言?请填写具体方言或“无”',
      name:"dialect_name",
      required: true
    },
    {
      prompt: "你是如何选择指示安全道路的路标的？你注意到选项中有什么特征了吗？",
      required: true,
      name:"feedback",
      rows: 5
    }
    ],
    data: {test_type: 'exp_survey'},
    button_label: '下一页'
};

var end_q1 = {
  type:'survey-multi-choice',
  questions:[
    {
      prompt:"你的母语是汉语吗？",
      options:["是","否"],
      required: true,
      horizontal: true,
      name: "native_lang",
      
      
    },
    {
      prompt:"您的性别是？",
      options:["男","女"],
      required: true,
      horizontal: true,
      name: "gender",
    },
  ],
  data: {test_type: 'gen_survey'},
  button_label:'继续'
};



var end = {
  timeline:[end_q1, end_q2]
};

var exit={
  type:'html-keyboard-response',
  prompt:'感谢您的参与',
  stimulus: '请按任意键退出实验'
}



jsPsych.init({
  timeline: [preload, consent, fullscreen, task_explanation, catch_ex, description,
             habituation, trial, end, exit, fullscreen_exit],
  show_progress_bar: true
});