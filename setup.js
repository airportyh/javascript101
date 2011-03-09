function countParams(line){
    var paramStack = []
    function last(){
        return paramStack[paramStack.length - 1]
    }
    var otherHalf = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    var m
    while(m = line.match(/[\(\)\{\}\[\]]/)){
        if (otherHalf[last()] === m[0])
            paramStack.pop()
        else
            paramStack.push(m[0])
        line = line.slice(m.index + 1)
    }
    return paramStack.length
}
function displayData(data){
    if ('reply' in data){
        var msg = control.htmlEncode(data.reply)
        control.messageBeforePrompt(msg, 'reply')
    }else if ('error' in data){
        control.messageBeforePrompt(data.error, 'error')
    }else if ('console' in data){
        control.messageBeforePrompt(data.console, 'console')
    }
}
function layout(){
    $('#console, #console .jquery-console-inner').css({
        height: ($(window).height() - 22) + 'px'
    })
}
var control = $('#console').console({
    promptLabel: '> ',
    commandValidate:function(line){
        return line != ''
    },
    continuedPromptLabel: '  ',
    commandHandle:function(line){
        if (countParams(line) > 0){
            control.continuedPrompt = true
        }else{
            control.continuedPrompt = false
            control.commandResult('')
            var reply
            try{
                var result = String(window.eval(line))
                reply = {reply: result}
            }catch(e){
                var emsg = String(e)
                if (emsg.charAt(0) == '[')
                    emsg = 'Error: ' + e.message
                reply = {error: emsg}
            }finally{
                displayData(reply)
            }
        }
    },
    autofocus: true,
    animateScroll:true,
    promptHistory:true
})
function consoleLog(msg){
    displayData({console: msg})
}
console = {
    log: consoleLog
}
layout()
$(window).resize(layout)
var slides = $('#slides').text().split('\n\n').filter(function(l){return l.trim() != ''}).map(function(l){return l.trim()})
slides.forEach(function(line){
    control.addSlide(line)
})