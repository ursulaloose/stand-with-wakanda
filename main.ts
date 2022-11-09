sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Namor.setPosition(148, 2)
})
info.onScore(20, function () {
    scene.setBackgroundImage(assets.image`boston-bridge`)
    game.over(true)
    effects.confetti.startScreenEffect()
    game.showLongText("\"We are safe!\"", DialogLayout.Bottom)
    Shuri.sayText("WAKANDA FOREVER", 5000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Namor.setPosition(148, 2)
})
let Shuri: Sprite = null
let Riri: Sprite = null
let Namor: Sprite = null
game.showLongText("\"Help Shuri, Okoye and Riri escape Namor\"", DialogLayout.Full)
game.showLongText("\"When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points!\"", DialogLayout.Full)
game.showLongText("\"Earn 20 points to win and to stay alive you must jeep your heart(s)2", DialogLayout.Full)
Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
controller.moveSprite(Riri, -68, -58)
Namor.setPosition(148, 2)
info.setLife(2)
Namor.follow(Shuri, 30)
Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
controller.moveSprite(Riri, 34, -53)
Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
scene.setBackgroundImage(assets.image`wakanda`)
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
