(() => {
    "use strict"

    const wordArea = document.getElementById("js-word");
    const definitionArea = document.getElementById("js-definition");
    const sampleArea = document.getElementById("js-sample");
    const buttonArea = document.getElementById("js-buttons");
    const prevItemButton = document.getElementById("js-prevItem");
    const nextItemButton = document.getElementById("js-nextItem");

    prevItemButton.addEventListener("click", prevItem);
    nextItemButton.addEventListener("click",nextItem);

    document.onkeydown = (e) => {
        e.preventDefault();
        if (e.code === "ArrowRight") {
            nextItem();
        } else if (e.code === "ArrowLeft") {
            prevItem();
        }
    }


    const dictionary = [
        {
            word: "Reboot",
            definition: "- to turn off and start a computer or an electronic system again",
            sample: "The computer will reboot itself after the major update."
        },
        {
            word: "Expeditiously",
            definition: "- quickly and efficiently",
            sample: "The company wanted to solve the crisis quietly and expeditiously."
        },
        {
            word: "Improvise",
            definition: "- If you improvise, you make or do something using whatever you have or without having planned it inadvance.",
            sample: "The group imrovised a shelter to keep themselves dry under the rain."
        }
    ];

    let index = 0;

    function assignItem(itemIndex) {
        wordArea.innerText = dictionary[itemIndex].word;
        definitionArea.innerText = dictionary[itemIndex].definition;
        sampleArea.innerText = dictionary[itemIndex].sample;
    }

    function nextItem() {    
        if (index < dictionary.length-1) {
            index++;
            assignItem(index);
        } else {
            index = 0;
            assignItem(index);
        }
    }

    function prevItem() {
        if (index > 0) {
            index--;
            assignItem(index);
        } else {
            index = dictionary.length-1;
            assignItem(index);
        }
    }

    assignItem(0);









    const animationDuration = 0.35;
    const animationOpacityIn = 0;
    const animationOpacityOut = 0;
    const animationEase = "power1.inOut" ;

    const tl = gsap.timeline();

    function animationFadeIn() {
        tl.from(wordArea, {duration: animationDuration, opacity: animationOpacityIn, ease: animationEase})
        .from(definitionArea, {duration: animationDuration, opacity: animationOpacityIn, ease: animationEase})
        .from(sampleArea, {duration: animationDuration, opacity: animationOpacityIn, ease: animationEase})
        .from(buttonArea, {duration: animationDuration, opacity: animationOpacityIn, ease: animationEase});
    }
    animationFadeIn();

    function animationFadeOut() {
        tl.to(wordArea, {duration: animationDuration, opacity: animationOpacityOut, ease: animationEase})
        .to(definitionArea, {duration: animationDuration, opacity: animationOpacityOut, ease: animationEase})
        .to(sampleArea, {duration: animationDuration, opacity: animationOpacityOut, ease: animationEase})
        .to(buttonArea, {duration: animationDuration, opacity: animationOpacityOut, ease: animationEase});
    }

    // animationFadeOut();


})();