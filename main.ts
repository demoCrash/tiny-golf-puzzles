function mapfillCircle(cx: number, cy: number, r: number, c: number) {
    screen.fillCircle(cx - scene.cameraLeft(), cy - scene.cameraTop(), r, c)
}

function rectfill(x0: number, y0: number, x1: number, y1: number, col: number) {
    screen.fillRect(x0 - scene.cameraLeft(), y0 - scene.cameraTop(), x1 - x0 + 1, y1 - y0 + 1, col)
}

function imageNotDisplayColor(img: Image, x: number, y: number, color: number) {
    for (let i = x; i < x + img.width; i++) {
        for (let j = y; j < y + img.height; j++) {
            if (img.getPixel(i - x, j - y) == color) {
                img.setPixel(i - x, j - y, screen.getPixel(i, j))
            }
        }
    }
}

function mapdrawImage(from: Image, x: number, y: number, flip_x?: boolean, flip_y?: boolean, isNotTransparent?: boolean, ignoreColor?: number) {

    if (flip_x) {
        from.flipX()
    }
    if (flip_y) {
        from.flipY()
    }
    if (isNotTransparent) {
        if (ignoreColor) {
            imageNotDisplayColor(from, x - scene.cameraLeft(), y - scene.cameraTop(), ignoreColor);
            screen.drawImage(from, x - scene.cameraLeft(), y - scene.cameraTop())
        } else {
            screen.drawImage(from, x - scene.cameraLeft(), y - scene.cameraTop())
        }
    } else {
        screen.drawTransparentImage(from, x - scene.cameraLeft(), y - scene.cameraTop())
    }

}

function pset(cx: number, cy: number, col: number) {
    screen.setPixel(cx - scene.cameraLeft(), cy - scene.cameraTop(), col);
}

function spr(n: number, x: number, y: number, w?: number, h?: number, flip_x?: boolean, flip_y?: boolean) {
    if (n == 64) {
        mapdrawImage(assets.image`myImage7`, x, y, flip_x, flip_y)
    } else if (n == 68) {
        mapdrawImage(assets.image`myImage8`, x, y, flip_x, flip_y)
    } else if (n == 72) {
        mapdrawImage(assets.image`myImage9`, x, y, flip_x, flip_y)
    } else if (n == 3) {
        mapdrawImage(assets.image`myImage0`, x, y, flip_x, flip_y)
    } else if (n == 19) {
        mapdrawImage(assets.image`myImage10`, x, y, flip_x, flip_y)
    } else if (n == 8) {
        mapdrawImage(assets.image`myImage13`, x, y, flip_x, flip_y)
    } else if (n == 9) {
        mapdrawImage(assets.image`myImage14`, x, y, flip_x, flip_y)
    } else if (n == 10) {
        mapdrawImage(assets.image`myImage15`, x, y, flip_x, flip_y)
    } else if (n == 11) {
        mapdrawImage(assets.image`myImage16`, x, y, flip_x, flip_y)
    } else if (n == 91) {
        mapdrawImage(assets.image`myImage17`, x, y, flip_x, flip_y)        
    } else if (n == 80) {
        mapdrawImage(assets.image`myImage18`, x, y, flip_x, flip_y)
    } else if (n == 81) {
        mapdrawImage(assets.image`myImage19`, x, y, flip_x, flip_y)
    } else if (n == 82) {
        mapdrawImage(assets.image`myImage20`, x, y, flip_x, flip_y)
    } else if (n == 83) {
        mapdrawImage(assets.image`myImage21`, x, y, flip_x, flip_y)
    } else if (n == 84) {
        mapdrawImage(assets.image`myImage22`, x, y, flip_x, flip_y)
    } else if (n == 85) {
        mapdrawImage(assets.image`myImage23`, x, y, flip_x, flip_y)
    } else if (n == 86) {
        mapdrawImage(assets.image`myImage24`, x, y, flip_x, flip_y)
    } else if (n == 87) {
        mapdrawImage(assets.image`myImage25`, x, y, flip_x, flip_y)
    } else if (n == 88) {
        mapdrawImage(assets.image`myImage26`, x, y, flip_x, flip_y)
    } else if (n == 89) {
        mapdrawImage(assets.image`myImage27`, x, y, flip_x, flip_y)
    } else if (n == 90) {
        mapdrawImage(assets.image`myImage28`, x, y, flip_x, flip_y)
    } else if (n == 96) {
        mapdrawImage(assets.image`myImage29`, x, y, flip_x, flip_y)
    } else if (n == 34) {
        mapdrawImage(assets.image`myImage30`, x, y, flip_x, flip_y)
    } else if (n == 32) {
        mapdrawImage(assets.image`myImage31`, x, y, flip_x, flip_y)
    } else if (n == 33) {
        mapdrawImage(assets.image`myImage32`, x, y, flip_x, flip_y)
    } 
}

function dist(x1:number,y1:number,x2:number,y2:number) :number {
    return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
}

function restoremap(){
    for(let i = mx;i<=mx+19;i++) {
        for(let j =my;j<=my+14;j++) {
            if(mget(i,j) == 24) {
                mset(i,j,4)
            }
        }
    }
}

function print(text: string, x: number, y: number, color?: number) {
    screen.print(text, x - scene.cameraLeft(), y - scene.cameraTop(), color, image.font5)
}

function printo(str: string, startx: number, starty: number, col: number, col_bg: number) {
    print(str, startx + 1, starty, col_bg)
    print(str, startx - 1, starty, col_bg)
    print(str, startx, starty + 1, col_bg)
    print(str, startx, starty - 1, col_bg)
    print(str, startx + 1, starty - 1, col_bg)
    print(str, startx - 1, starty - 1, col_bg)
    print(str, startx - 1, starty + 1, col_bg)
    print(str, startx + 1, starty + 1, col_bg)
    print(str, startx, starty, col)
}

function printc(str: string, x: number, y: number,col: number, col_bg?: number,special_chars?: number) {
    let spc = special_chars || 0

    let len = (str.length * 4) + (spc * 3)
    let startx = x - (len / 2)
    let starty = y - 2
    printo(str, startx, starty, col, col_bg)
}

function drawpar(txt: number, pt: number, dx: number, dy: number){
    let sstr = txt.toString()
    let pstr = pt.toString()
    for (let i = 0; i < sstr.length;i++) {
        spr(80 + parseInt(sstr.substr(i, 1)), dx + i  * 8, dy)
    }
    spr(90, dx + (sstr.length * 8), dy)
    for (let i = 0; i < pstr.length; i++) {
        spr(80 + parseInt(pstr.substr(i, 1)), dx + (i+1) * 8 + (sstr.length * 8), dy)
    }
}

function drawtext(txt:number, dx:number, dy:number) {
    let sstr = txt.toString()
    for (let i = 0; i < sstr.length;i++) {
        spr(80 + parseInt(sstr.substr(i,1)), dx + i * 8, dy)
    }
}

function fget(sp: number,flag:number) {
    if (sp == 2) {
        if (flag == 0) {
            return 1;
        } 
    } else if (sp == 4) {
        if (flag == 1) {
            return 1;
        }
    } else if (sp == 18) {
        if (flag == 0) {
            return 1;
        }
    }
    return 0
}
//game.consoleOverlay.setVisible(true)

game.onShade(function() {
    //background grooves
    //foreach(grass, drawgrass)
    //screen.fill(0)
    if (mode == "menu") {
        rectfill(0, 16, 159, 28, 1)
        spr(64, 48+16, 19, 4, 1)

        rectfill(0, 32, 159, 44, 3)
        spr(68, 48 + 16, 35, 4, 1)

        rectfill(0, 48, 159, 60, 1)
        spr(72, 36 + 16, 51, 7, 1)

        let fgc = 0;
        let bgc = 1;
        if (mitem == 1) {
            fgc = 7;
            bgc = 3;
            if  (mhole < 32 && levelunlocked > mhole - 1) {
                spr(32, 88+24, 72)
            }
            if (mhole > 1) {
                spr(33, 32+8, 72)
            }
        } else {
            fgc = 5;//0 NOT WORK
            bgc = 1;
        }
        printc("HOLE " + mhole, 64 + 8, 76, fgc, bgc)
        if (mitem == 2) {
            fgc = 7;
            bgc = 3;
            spr(34, 88+32, 82+1)
        } else {
            fgc = 5;
            bgc = 1;
        }
        printc("MUSIC: " + tunes, 64 + 8, 86, fgc, bgc)
        if (mitem == 3) {
            fgc = 7;
            bgc = 3;
            spr(34, 88 + 32, 92+1)
        } else {
            fgc = 5;
            bgc = 1;
        }
        printc("SFX: " + sounds, 72, 96, fgc, bgc)

        if (mitem == 4) {
            fgc = 7;
            bgc = 3;
            spr(34, 88+32, 102+1)
        } else {
            fgc = 5;
            bgc = 1;
        }
        printc("PLAY", 76, 106, fgc, bgc)
        printc("tom brinton's".toUpperCase(), 68, 7, 3)
    } else if (mode == "game") {
        //--balls
        for (let ball of balls) {
            ball.drawball()
        }

        //--flags
        for (let flg of flags) {
            flg.drawflag()
        }

        //--dust
        for (let dst of dust) {
            dst.drawdust()
        }

        //--strokes
        drawpar(strokes, pars[level], 1, 1)
        if (scores[level] != 0) {
            printo("BEST:"+scores[level], 2, 11, 6, 1)
        }
        spr(91, 96+32, 1, 2, 1)
        drawtext(level + 1, 112+32, 1)
    } else if (mode == "win") {
        rectfill(0, 8, 159, 20, 1)
        spr(96, 32+16, 11, 8, 1)

        let i = 0
        for (let col = 0;col <=2;col++) {
            for (let row = 0; row <= 11;row++) {
                let c1 = 11;
                let c2 = 3;
                if (scores[i] > pars[i]) {
                    c1 = 8;
                    c2 = 2;
                }
                printo(scores[i] + "/" + pars[i], 20 + col * 54, 24 + row * 10, c1, c2)
                printo((i + 1).toString(),  2+col * 54, 24 + row * 10, 6, 5)
                i += 1
                if (i == 32) {
                    break;
                }
            }
        }
        //--list total score
        let totalscore = 0
        let totalpar = 0
        for (let i = 0; i < 32;i++) {
            totalscore += scores[i]
            totalpar += pars[i]
        }
        printc("total".toUpperCase() , 120, 110 - 4, 7, 1)

        printc(totalscore + "/" + totalpar, 124, 110+4, 7, 1)

        //spr(34, 30, 118-8)
        //printc("return to menu", 68, 122-8, 7, 3)
    }
})

class Ball {
    x:number
    y:number
    s:number
    xs:number
    ys:number
    nx:number
    ny:number
    onsand:boolean
    lastsand:any
    rock:boolean
    constructor(bx:number,by:number,rock?:boolean) {
        this.x = bx
        this.y = by
        this.s = 3
        this.xs = 0
        this.ys = 0
        this.nx = 0
        this.ny = 0
        this.onsand = false
        this.lastsand = null
        if (rock) {
            this.s = 19
            this.rock = true
        }
        balls.push(this)
    }



    didcollide() {
        let collided = false
        let tx = this.nx + 4
        let ty = this.ny + 1
        if (fget(mget(Math.floor(tx / 8) + mx, Math.floor(ty / 8) + my), 0)) {
            collided = true
            createDust(tx, ty, 3)
        }
        //--bottom
        tx = this.nx + 4
        ty = this.ny + 7
        if (fget(mget(Math.floor(tx / 8) + mx, Math.floor(ty / 8) + my), 0)) {
            collided = true
            createDust(tx, ty, 3)
        }
        //--left
        tx = this.nx + 1
        ty = this.ny + 4
        if (fget(mget(Math.floor(tx / 8) + mx, Math.floor(ty / 8) + my), 0) ) {
            collided = true
            createDust(tx, ty, 3)
        }
        //--right
        tx = this.nx + 7
        ty = this.ny + 4
        if (fget(mget(Math.floor(tx / 8) + mx, Math.floor(ty / 8) + my), 0) ) {
            collided = true
            createDust(tx, ty, 3)
        }
        let bx = this.nx + 4
        let by = this.ny + 4
        for (let bb of balls) {
            if (bb == this) {

            } else {
                if (bb.xs == 0 && bb.ys == 0){
                    let bbx = bb.x + 4
                    let bby = bb.y + 4
                    if (Math.abs(bx - bbx) < 8 && Math.abs(by - bby) < 8 ) {
                        collided = true
                        createDust((bx + bbx) / 2, (by + bby) / 2, 6)
                    }
                    
                }
            }
        }
        return collided
    }

    drawball() {
        spr(this.s, this.x, this.y)
    }
}

function bottomup(a: Ball, b: Ball): number {
    return a.y > b.y ? 1 : 0
}
function topdown(a: Ball, b: Ball): number {
    return a.y < b.y ? 1 : 0
}
function rtol(a: Ball, b: Ball): number {
    return a.x > b.x ? 1 : 0
}
function ltor(a: Ball, b: Ball): number {
    return a.x < b.x ? 1 : 0
}

class Hole {
    x:number;
    y:number;
    cx:number;
    cy:number;
    mx:number;
    my:number;
    constructor(hx: number, hy: number, hmx: number, hmy: number) {
        this.x = hx
        this.y = hy
        this.cx = hx+4
        this.cy = hy+4
        this.mx = hmx
        this.my = hmy
        holes.push(this)
    }
    checkhole() {
        for(let b of balls) {
            if (dist(b.x, b.y, this.x, this.y) < 4 && !b.rock) {
                mset(this.mx, this.my, 23)
                balls.removeElement(b)
                holes.removeElement(this)
            }
        }
    }
}
 
class Water {
    x:number;
    y:number;
    cx:number;
    cy:number;
    constructor(wx:number,wy:number) {
        this.x = wx
        this.y = wy
        this.cx = wx+4
        this.cy = wy+4
        water.push(this)
    }

    checkwater() {
        for(let b of balls) {
            let bcx = b.x + 4
            let bcy = b.y + 4
            if (dist(bcx,bcy,this.cx,this.cy) < 3) {
                createDust(this.cx,this.cy,6)
                balls.removeElement(b)
            }
        }
    }
}

class Sand {
    x:number;
    y:number;
    cx:number;
    cy:number;
    constructor(sx:number,sy:number) {
        this.x = sx
        this.y = sy
        this.cx = sx+4
        this.cy = sy+4
        sand.push(this)
    }

    checksand() {
        for (let b of balls) {
            if (b.lastsand == this) {
                //do nothing
            } else {
                let bcx = b.x + 4
                let bcy = b.y + 4
                if (dist(bcx,bcy,this.cx,this.cy) < 3) {
                    b.xs = 0
                    b.ys = 0
                    b.x = Math.round(b.x/8) * 8
                    b.y = Math.round(b.y/8) * 8
                    b.lastsand = this
                }
            }
        }
    }
}

class Switch {
    x:number;
    y:number;
    cx:number;
    cy:number;
    mx:number;
    my:number;
    pressed:boolean;
    constructor(hx:number,hy:number,hmx:number,hmy:number) {
        this.x = hx
        this.y = hy
        this.cx = hx + 4
        this.cy = hy + 4
        this.mx = hmx
        this.my = hmy
        this.pressed = false
        switches.push(this)
    }

    checkswitch() {
        let ballison = false
        for (let b of balls) {
            if (dist(b.x,b.y,this.x,this.y) < 4) {
                ballison = true
                if (!this.pressed) {

                }
            }
        }
        if (!ballison && this.pressed) {

        }
        this.pressed = ballison
    }
}

function opendoors() {
    if (allswitchespressed()) {
        for (let i = mx;i <= mx + 19;i++) {
            for(let j = my; j < my+14;j++) {
                if (mget(i,j) == 18) {
                    mset(i,j,20)
                }
            }
        }
    } else {
        for (let i = mx;i <= mx+19;i++) {
            for (let j =my;j<=my+14;j++) {
                if (mget(i,j) == 20) {
                    mset(i,j,18)
                }
            }
        }
    }
}

function allswitchespressed() :boolean{
    for (let sw of switches) {
        if (!sw.pressed) {
            return false
        }
    }
    return true
}

function ballsmoving() :boolean{
    let isanyballmoving = false
    for (let b of balls) {
        if (b.xs != 0 || b.ys != 0) {
            isanyballmoving = true
        }
    }
    return isanyballmoving
}



controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == "menu") {
        if (mitem == 1) {
            if (mhole > 1) {
                mhole -= 1
            }
        }
    } else if (mode == "game") {
        if (!ballsmoving() && wt == 0) {
            for (let b of balls) {
                b.ys = 0
                b.xs = -spd
            }
            balls.sort(rtol)
            strokes += 1
        }
    }
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == "menu") {
        if (mitem == 1) {
            if (mhole < 32 && levelunlocked > mhole - 1) {
                mhole += 1
            }
        }
        
    } else if (mode == "game") {
        if (!ballsmoving() && wt == 0) {
            for (let b of balls) {
                b.ys = 0
                b.xs = spd
            }
            balls.sort(ltor)
            strokes += 1
        }
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    //blockSettings.clear()
})

function updateballs() {
    for (let b of balls) {
        if (b.xs != 0 || b.ys != 0) {
            b.nx = b.x + b.xs
            b.ny = b.y + b.ys
            if (b.didcollide()) {
                b.x = Math.floor(b.x / 8) * 8
                b.y = Math.floor(b.y / 8) * 8
                b.xs = 0
                b.ys = 0
            }
            b.x += b.xs
            b.y += b.ys
        } else {
            b.lastsand = null
        }
    }

}

function createDust(dx: number, dy: number, dc: number) {
    for (let i = 1;i<=10;i++) {
        let d = new Dust(dx,dy,dc)
        dust.push(d)
    }
}

class Dust {
    x:number;
    y:number;
    c:number;
    xs:number;
    ys:number;
    t:number;
    constructor(dx: number, dy: number, dc: number) {
        this.x = dx
        this.y = dy
        this.c = dc
        this.xs = -0.5 + Math.random()
        this.ys = -Math.random()
        this.t = 5 + randint(1, 10)
    }

    drawdust(){
        this.x += this.xs
        this.y += this.ys
        this.ys+=0.1
        this.t-=1
        if (this.t <= 0) {
            dust.removeElement(this)
        }
        pset(this.x,this.y,this.c)
    }
}

class Flag {
    x:number;
    y:number;
    s:number;
    at:number;
    constructor(fmx:number,fmy:number) {
        this.x = (fmx - mx) * 8
        this.y = (fmy - my - 1) * 8
        this.s = 8 + randint(0,3)
        this.at = 0
        flags.push(this)
    }
    drawflag() {
        this.at += 1
        if (this.at > 5) {
            this.at = 0
            this.s += 1
            if (this.s == 12) {
                this.s = 8
            }
        }
        spr(this.s,this.x,this.y)
    }
}

function dSetLevelScore(lvl: number, data: number) {
    blockSettings.writeNumber(cartName + dkeyscore + lvl, data)
}

function dGetLevelScore(lvl: number): number {
    return blockSettings.readNumber(cartName + dkeyscore + lvl) || 0
}

function dGetMaxLevel(): number {
    return blockSettings.readNumber(cartName + dkeymaxlvl) || 0
}

function dSetMaxLevel(data: number) {
    blockSettings.writeNumber(cartName + dkeymaxlvl, data)
}
//cart data
let cartName = "tiny-golf-puzzles"
let dkeyscore = "score"
let dkeymaxlvl = "maxlvl"

let mapsData: Buffer;
let mode = "menu"
let gs = 0
let balls: Ball[] = []
let holes: Hole[] = []
let sand:Sand[] = []
let dust:Dust[] = []
let flags: Flag[]  = []
let switches: Switch[] = []
let water:Water[] = []
let strokes = 0
let wt = 0
let levelunlocked = 0
let level = 0
let par = 3
let mitem = 4
let mhole = levelunlocked + 1
let tunes = "on"
let sounds = "on"
let spd:number;
let mx:number;
let my:number;
let level_width:number;
let allMaps: tiles.WorldMap[] = []
let scores:number[] = []
allMaps = [
    tiles.createSmallMap(tilemap`level2`),
    tiles.createSmallMap(tilemap`level3`),
    tiles.createSmallMap(tilemap`level4`),
    tiles.createSmallMap(tilemap`level5`),
    tiles.createSmallMap(tilemap`level6`),
    tiles.createSmallMap(tilemap`level7`),
    tiles.createSmallMap(tilemap`level8`),
    tiles.createSmallMap(tilemap`level9`),
    tiles.createSmallMap(tilemap`level10`),
    tiles.createSmallMap(tilemap`level11`),
    tiles.createSmallMap(tilemap`level12`),
    tiles.createSmallMap(tilemap`level13`),
    tiles.createSmallMap(tilemap`level14`),
    tiles.createSmallMap(tilemap`level15`),
    tiles.createSmallMap(tilemap`level16`),
    tiles.createSmallMap(tilemap`level17`),
    tiles.createSmallMap(tilemap`level18`),
    tiles.createSmallMap(tilemap`level19`),
    tiles.createSmallMap(tilemap`level20`),
    tiles.createSmallMap(tilemap`level21`),
    tiles.createSmallMap(tilemap`level22`),
    tiles.createSmallMap(tilemap`level23`),
    tiles.createSmallMap(tilemap`level24`),
    tiles.createSmallMap(tilemap`level25`),
    tiles.createSmallMap(tilemap`level26`),
    tiles.createSmallMap(tilemap`level27`),
    tiles.createSmallMap(tilemap`level28`),
    tiles.createSmallMap(tilemap`level29`),
    tiles.createSmallMap(tilemap`level30`),
    tiles.createSmallMap(tilemap`level31`),
    tiles.createSmallMap(tilemap`level32`),
    tiles.createSmallMap(tilemap`level33`),
];
const pars = [
3, 6, 5, 7, 3, 7, 5, 4,
5, 5, 4, 5, 6, 6, 11, 4,
10, 8, 5, 10, 5, 8, 11,
5, 11, 5, 8, 9, 7, 12, 13, 20
];
function gameInit() {
    spd = 2
    mx = 0
    my = 0
    for(let i = 0;i<32;i++) {
        scores.push(dGetLevelScore(i))
    }

    levelunlocked = dGetMaxLevel()

    mhole = Math.min(levelunlocked + 1,32)
}

game.onUpdate(function () {
    gs += .001
    if (mode == "game") {
        updateballs()
        for(let h of holes) {
            h.checkhole()
        }

        for(let w of water) {
            w.checkwater()
        }

        for (let s of sand) {
            s.checksand()
        }

        for (let sw of switches) {
            sw.checkswitch()
        }
        opendoors()

        if (didwin()) {
            if (wt == 0) {
                wt = 90
            } else if (wt > 1) {
                wt -= 1
            } else if (wt == 1) {
                if (scores[level] == 0) {
                    scores[level] = strokes;
                    dSetLevelScore(level,strokes);
                } else {
                    if (strokes < scores[level]) {
                        scores[level] = strokes
                        dSetLevelScore(level,strokes)
                    }
                }
                restoremap()
                level += 1
                if (level > levelunlocked) {
                    levelunlocked = level
                    dSetMaxLevel(levelunlocked)
                }

                if (level == 32) {
                    mode = "win"
                    tiles.loadMap(tiles.createSmallMap(tilemap`level34`))
                } else {
                    loadlevel()
                }
            }
            
        }
    }
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == "menu") {
        mitem -= 1
        if (mitem < 1) mitem = 4
    } else if (mode == "game") {
        if (!ballsmoving() && wt == 0) {
            for (let b of balls) {
                b.ys = -spd
                b.xs = 0
            }
            balls.sort(bottomup)
            strokes += 1
        }
    }
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == "menu") {
        mitem += 1
        if (mitem > 4) mitem = 1
    } else if (mode == "game") {
        if (!ballsmoving() && wt == 0) {
            for (let b of balls) {
                b.ys = spd
                b.xs = 0
            }
            balls.sort(topdown)
            strokes += 1
        }
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    if(mode == "menu") {
        if (mitem == 4) {
            mode = "game"
            level = mhole - 1
            loadlevel()
        }
    } else if (mode == "game") {
        if (wt == 0) {
            loadlevel()
        }
    } else if (mode == "win") {
        mode = "menu"
    }
})

function mget(c: number, r: number): number {
    return mapsData.getUint8((c | 0) + (r | 0) * 20);
}

function mset(c: number, r: number, snum: number) {
    mapsData.setUint8((c | 0) + (r | 0) * 20, snum);
    if (snum == 23) {
        tiles.setTileAt(tiles.getTileLocation(c, r),assets.image`myImage11`)
    } else if (snum == 24) {
        tiles.setTileAt(tiles.getTileLocation(c, r),assets.image`myImage12`)
    } else if (snum == 18) {
        tiles.setTileAt(tiles.getTileLocation(c, r), assets.tile`myTile6`)
    } else if (snum == 20) {
        tiles.setTileAt(tiles.getTileLocation(c, r), assets.tile`myTile0`)
    } else if (snum == 4) {
        tiles.setTileAt(tiles.getTileLocation(c, r), assets.tile`myTile1`)
    }
}

gameInit();
function loadlevel()
{
    mx = 0
    my = 0

    balls = []
    holes = []
    water = []
    sand = []
    dust = []
    flags = []
    switches = []
    strokes = 0
    wt = 0
    level_width = mx + 16;
    mapsData = Buffer.create(20*15)

    tiles.loadMap(allMaps[level])
    for (let loc of tiles.getTilesByType(assets.tile`myTile2`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 35);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 2);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile1`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 4);
    }
    for (let loc of tiles.getTilesByType(assets.image`myImage11`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 23);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile3`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 7);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile4`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 6);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile5`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 36);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile6`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 18);
    }
    for (let loc of tiles.getTilesByType(assets.tile`myTile7`)) {
        mapsData.setUint8((loc.column | 0) + (loc.row | 0) * 20, 17);
    }
    for (let i = mx;i <= mx+19;i++) {
        for (let j = my;j <= my+14;j++) {
            if (mget(i,j) == 35) {
                new Ball((i - mx) * 8, (j - my) * 8);
            } else if (mget(i, j) == 23) {
                mset(i, j, 4)
                new Hole((i - mx) * 8, (j - my) * 8, i, j)
            } else if (mget(i,j) == 36) {
                new Ball((i - mx) * 8, (j - my) * 8,true);
            } else if (fget(mget(i,j),1)) {
                new Hole((i - mx) * 8, (j - my) * 8, i, j)
            } else if (mget(i,j) == 7) {
                new Water((i - mx) * 8, (j - my) * 8)
            } else if(mget(i,j) == 6) {
                new Sand((i - mx) * 8, (j - my) * 8)
            } else if(mget(i,j) == 17) {
                new Switch((i - mx) * 8, (j - my) * 8, i, j)
            }
        }
    }
}

function didwin() :boolean{
    if(wt>0) {
        return true
    }
    for (let i = mx;i<=mx+19;i++) {
        for(let j = my;j<=my+14;j++) {
            if(mget(i,j) == 4) {
                return false
            }
        }
    }

    for (let i = mx; i <= mx + 19; i++) {
        for (let j = my + 14; j >= my; j--) {
            if (mget(i, j) == 23) {
                mset(i, j, 24)
                new Flag(i,j)
            }
        }
    }
    return true

}
