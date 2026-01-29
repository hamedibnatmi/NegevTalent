console.log(document)


// excercise 1
{
    let ball = document.getElementById("ball")
    let side = parseInt(window.getComputedStyle(ball).left) || 0
    let up = parseInt(window.getComputedStyle(ball).top) || 0

    let leftArrow = document.getElementById("left")
    let rightArrow = document.getElementById("right")
    let upArrow = document.getElementById("up")
    let downArrow = document.getElementById("down")

    // leftArrow.setAttribute("onclick", "moveTheBall('left')")
    // rightArrow.setAttribute("onclick", "moveTheBall('right')")
    // upArrow.setAttribute("onclick", "moveTheBall('up')")
    // downArrow.setAttribute("onclick", "moveTheBall('down')")

    leftArrow.onclick = function () {
        moveTheBall("left")
    }
    rightArrow.onclick = function () {
        moveTheBall("right")
    }
    upArrow.onclick = function () {
        moveTheBall("up")
    }
    downArrow.onclick = function () {
        moveTheBall("down")
    }

    function moveTheBall(arrow) {
        switch (arrow) {
            case "left":
                side -= 15
                break;
            case "right":
                side += 15
                break;
            case "up":
                up -= 15
                break;
            case "down":
                up += 15
                break;
        }


        if (side < 0) side = 0
        if (up < 0) up = 0
        if (side > 415) side = 415
        if (up > 415) up = 415
        ball.style.left = side + "px"
        ball.style.top = up + "px"
    }


    //##############################################################

    // By event listener

    // document.addEventListener("click", function (event) {
    //     console.log(event.target.id)
    //     moveTheBall(event.target.id)
    // });


    // function moveTheBall(arrow) {
    //     const ball = document.getElementById("ball")
    //     const style = window.getComputedStyle(ball)
    //     let side = parseInt(style.left) || 0
    //     let top = parseInt(style.top) || 0

    //     switch (arrow) {
    //         case "left":
    //             side -= 15
    //             break;
    //         case "right":
    //             side += 15
    //             break;
    //         case "up":
    //             top -= 15
    //             break;
    //         case "down":
    //             top += 15
    //             break;
    //     }


    //     if (side < 0) side = 0
    //     if (top < 0) top = 0
    //     if (side > 415) side = 415
    //     if (top > 415) top = 415
    //     ball.style.left = side + "px"
    //     ball.style.top = top + "px"
    // }
}
