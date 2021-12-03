//switch_sound_ ABB_obj 1st 
var preload = {
    type: 'preload',
    images:['barn.png','bed.png','bush.png','f_arrow.png','j_arrow.png','rabbit_1.png','rabbit_2.png','rabbit_3.png','rabbit_4.png','rabbit_5.png','rabbit_6.png','rabbit_7.png','rabbit_8.png', 'scene.jpg'],
    audio:['bird.mp3','cat.mp3','cat.mp3','dog.mp3','horse.mp3','nosound.mp3','pig.mp3','rooster.mp3','dekode.mp3','dekoko.mp3',
    'dewode.mp3','dewowo.mp3','likoli.mp3','fekoko.mp3','lawola.mp3','fewowo.mp3','kodede.mp3','lideli.mp3',
    'kofefe.mp3','kofeko.mp3','wodede.mp3','ladela.mp3','wofefe.mp3','wofewo.mp3','3x-ABB-16-familiarization.mp3']
};
  
var consent = {
  type: 'external-html',
  url: 'consent_sound.html',
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


  
var exit = {
  type:'external-html',
  url: 'exit.html',
  cont_btn: 'end'
};
    

    
var task_explanation = {
  type: 'html-keyboard-response',
  stimulus: `
    <div style="width: 45em;">
    <p>在实验中，你需要在两张图片中选择与符合提示的音频相匹配的图片。</p>
    <p>两段音频会依次播放，分别对应左侧和右侧图片，你需要根据提示在左侧和右侧图片中进行选择。</p>
    <p><b>每段音频会在播放很短的时间之后消失，请集中注意力。</b></p>

    <p>你需要在键盘上按“F”或“J”键来选择图片。
    <b>“F”键</b>对应<b><i>左侧</i></b>的图片，<b>“J”键</b>对应<b><i>右侧</i></b>的图片。</p>
  
    <p><b>请注意：</b>你只能在两个箭头一起出现后才能进行选择。请尽量又快又准地进行选择；</p>
    <p><b>按键后你将无法修改答案。</b></p>
    <p>请将你的左右食指分别放在“F”键和“J”键上。</p>
    <p>如果你已理解实验任务并准备好开始实验，</p>
    <p style='color:red'>请按任意键继续</p>
    </div>`,
      
};
    
    
var catch_ex1 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "dog.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "cat.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每张床下（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>狗</b>的那边。</p>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bed.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择床下藏有狗的那边。</p>
      `,
      stimulus: "nosound.mp3",
      choices: ['f','j'],
      data: {test_type: 'catch_1'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
],
};
    
var catch_ex2 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "bird.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "rooster.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个灌木丛后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>公鸡</b>的那边。</p>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="bush.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择灌木后藏有公鸡的那边。</p>
      `,
      stimulus: "nosound.mp3",
      choices: ['f','j'],
      data: {test_type: 'catch_2'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'j')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
],
};
    
var catch_ex3 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "horse.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "pig.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-450px'>仔细听每个谷仓后（如箭头所指）藏着的动物的声音。当听到两只动物的声音后，通过按对应的键选择是<b>马</b>的那边。</p>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 35%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="barn.png" width="300" height="300" style= "position: absolute; left: 65%;top:50%; margin-left:-150px; margin-top:-200px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择谷仓后藏有马的那边。</p>
      `,
      stimulus: "nosound.mp3",
      choices: ['f','j'],
      data: {test_type: 'catch_3'},
      on_finish: function(data){
        if(jsPsych.pluginAPI.compareKeys(data.response, 'f')){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
    }
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
  url: 'backstory_sound.html',
  cont_btn: 'start'
};

var habituation = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p><b>请尽量仔细地听贝拉家的歌。</b>这首歌会持续大约2分钟，请听完整首歌。</p>
      <p style=color:red>请按任意键开始。</p>
      `,
      stimulus:'nosound.mp3'
    },
    {
      stimulus: '3x-ABB-16-familiarization.mp3',
      prompt: `
      <div class='fill-screen'>
          <img class='make-it-fit' 
               src='scene.jpg'>
      </div>
      `,
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      stimulus: 'nosound.mp3',
      prompt:'<p style=color:red>请按任意键继续。</p>'
    },
  ]
};

var trial_1 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "fewowo.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "lawola.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的妈妈</b>。</p>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_1.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_2 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "lideli.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "kodede.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的爸爸</b>。</p>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_2.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_3 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "ladela.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "wodede.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大姐</b>。</p>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_3.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_4 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "likoli.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "fekoko.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的大哥</b>。</p>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_4.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_5 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "dekoko.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "dekode.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二姐</b>。</p>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_5.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_6 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "wofefe.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "wofewo.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的二哥</b>。</p>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_6.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_7 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "kofeko.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "kofefe.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三姐</b>。</p>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_7.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

var trial_8 = {
  type: 'audio-keyboard-response',
  response_allowed_while_playing: false,
  timeline: [
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>请按任意键继续。</p>
      `,
      stimulus:"nosound.mp3",
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left: 35%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "dewowo.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      `,
      stimulus: "dewode.mp3",
      choices: jsPsych.NO_KEYS,
      trial_ends_after_audio: true
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      `,
      stimulus: "nosound.mp3",
      choices: jsPsych.NO_KEYS,
      trial_duration:500
    },
    {
      prompt: `
      <p style='position: absolute;left:50%;top: 15%; margin-left:-350px'>仔细听每只兔子（如箭头所指）的歌。当听完两只兔子的歌后，通过按对应的键选择谁是<b>贝拉的三哥</b>。</p>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 35%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="rabbit_8.png" width="200" height="173" style= "position: absolute; left: 65%;top:50%; margin-left:-100px; margin-top:-150px"/>
      <img src="f_arrow.png" width="100" height="100" style="position:absolute; left:35%;top:50%; margin-left:-50px; margin-top:150px"/>
      <img src="j_arrow.png" width="100" height="100" style="position:absolute; left:65%;top:50%; margin-left:-50px; margin-top:150px"/>
      <p style='color:red; position: absolute;left:50%;top:20%; margin-left:-75px'>按键选择贝拉的小伙伴。</p>
      `,
      stimulus: "nosound.mp3",
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
],
};

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
      prompt: "你是如何选择贝拉的家人的？你注意到他们的歌声中有什么特征吗？",
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