import React, { useEffect } from 'react';
import "./TextRunner.scss";

function TextRunner(props) {
    useEffect(() => {
const words = ["what ever you imagine is possible here...", "code for clients...", "Cras sed odio sed leo laoreet molestie id non purus..."];
        let i = 0;
        let counter;
    function typeNow() {
        let word = words[i].split("");
        var loopTyping = () => {
            if (word.length > 0) {
                document.getElementById('text').innerHTML += word.shift();
            } else {
                deleteNow();
                return false;
            };
            counter = setTimeout(loopTyping,100);
        };
            loopTyping();
        };
        function deleteNow() {
            let word = words[i].split("");
            var loopDeleting = function () {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('text').innerHTML = word.join("");
                }
                else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typeNow();
                    return false;
                };
                counter=setTimeout(loopDeleting,50);
            };
            loopDeleting();
        };
        typeNow();
    }, []);
        return (
            <div id="text">
            </div>
        );
    };

export default TextRunner;