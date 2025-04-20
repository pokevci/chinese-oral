        // Valid access keys
        const validKeys = [
            "28882302",
            "16802980",
            "12312312",
            "23131231",
            "43413123",
            "42141343",
            "98173131",
            "31231212",
            "81737213",
            "41413332",
            "34131123",
            "81312813"
        ];
        
        // Speech synthesis
        let speech = null;
        
        function speak(text) {
            if (speech) {
                window.speechSynthesis.cancel();
            }
            
            speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.lang = 'zh-CN';
            speech.rate = 0.9;
            
            window.speechSynthesis.speak(speech);
        }
        
        function pauseSpeech() {
            window.speechSynthesis.pause();
        }
        
        // Access control
        function checkAccess() {
            const inputKey = document.getElementById('accessKey').value.trim().toUpperCase();
            
            if (validKeys.includes(inputKey)) {
                document.getElementById('authBox').classList.add('hidden');
                document.getElementById('content').classList.add('active');
                localStorage.setItem('chineseReadingAccess', inputKey);
            } else {
                alert('访问密钥不正确，请重试或联系管理员获取有效密钥。');
            }
        }
        
        // Check if already authenticated
        window.onload = function() {
            const savedKey = localStorage.getItem('chineseReadingAccess');
            if (savedKey && validKeys.includes(savedKey)) {
                document.getElementById('authBox').classList.add('hidden');
                document.getElementById('content').classList.add('active');
            }
        };
    