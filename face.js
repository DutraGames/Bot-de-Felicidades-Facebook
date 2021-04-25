const browserDrive = require('puppeteer')

let msg = [
    `Um aniversário cheio de paz...
    Que os sentimentos mais puros se concretizem em gestos de bondade, e o amor encontre abertas as portas do seu coração.
    Que você possa guardar deste aniversário as melhores lembranças.
    E que tudo contribua para sua felicidade.
    Abraços e Feliz Aniversário!`,

    `Felicidades para você, por este dia tão especial que é o seu aniversário.
    Parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados.
    Que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim.
    Com todas as minhas forças, eu te desejo um feliz aniversário!
    Que seu caminhar seja sempre premiado com a presença de Deus, guiando seus passos e intuindo suas decisões, para que suas conquistas e vitórias, sejam constantes em seus dias.
    Parabéns por hoje, mas felicidades sempre.`,

    `A você desejo felicidade, saúde e amor todos os dias, e que este seja um aniversário inesquecível. Parabéns!`,

    `Feliz Aniversário! Tenha um dia cheio de alegria e uma vida de plena felicidade.`,

    `Parabéns e seja muito feliz, hoje e para sempre! Que esta data se repita por muitos anos, e que eu continue sempre ao seu lado para festejar com você.`,

    `Que o seu dia seja cheio de alegrias do início ao fim, e que a felicidade permaneça sempre do seu lado! Feliz Aniversário!`,

    `Parabéns peelo seu dia! Felicidades!!`,

    `Neste dia especial, aquilo que desejo para você é que os anos passem, mas nunca levem seu sorriso e esse olhar repleto de esperança. Feliz aniversário!`,

    `Tomara que a vida nos mantenha unidos para juntos celebrarmos mais e mais dias assim. Feliz Aniversário, meu amor!`,

    `Um abraço e um beijo para minha grande e maravilhosa amiga que hoje está de parabéns! Feliz aniversário, querida!`,

    `Parabéns e muitas felicidades! Desejo que seu aniversário seja mágico e que nunca falte felicidade, saúde e paz na sua vida.`,

    `Que a alegria deste dia se espalhe por toda sua vida e traga mais brilho aos seus dias. Feliz aniversário; muita saúde, paz e sucesso!`,

    `Desejo-te muitas felicidades, paz, alegria e muito sucesso. Parabéns!`,

    `Feliz Aniversário! Que a celebração da vida permaneça eternamente nos seus dias.`,

    `Você está de parabéns e o mundo agradece sua existência. Feliz aniversário!`,

    `Os nossos melhores dias estão à nossa frente… Feliz Aniversário!`,

    `Desejo para você toda a felicidade do mundo, que Deus te ilumine sempre, guie seus passos e dê muita força para que você possa lutar pelos seus objetivos hoje e sempre! Feliz Aniversário!`,

    `Parabéns! Muita saúde, paz, alegria, prosperidade, amor, e uma infinidade de coisas boas em sua vida. Você merece!`,

    `Que a alegria, paz, saúde, esperança e felicidade sejam renovadas em sua vida hoje e se renovem sempre. Feliz aniversário!`,

    `Que o dia de hoje seja cheio de lembranças felizes do passado e grandes esperanças para o futuro. Feliz Aniversário!`,

    `Hoje é o dia de celebrar a vida. Que seu dia seja abençoado. Feliz Aniversário!`,

    `Feliz aniversário! Hoje o dia é seu, mas também meu, pois celebrar o nascimento de alguém tão importante para mim!`,

    `Pela graça de Deus hoje você comemora mais um ano de vida, e a Ele eu agradeço com fervor. Parabéns pelo seu dia!`,

    `Eu te desejo, muito mais que a vida lhe trouxe todos estes anos. Te desejo sorte, quando a vida insistir em te azarar, te desejo sorrisos e gargalhadas singelas quando os dias parecerem tão tristes. Feliz aniversário!`,

    `Feliz Aniversário, que você possa comemorar muitos e muitos anos de vida, sempre em companhia da felicidade para viver momentos lindos, como você merece!`
]

function sorteio() {
    let min = 0
    let max = msg.length-1
    let index = Math.floor(Math.random() * (max - min) + min)

    return msg[index]
}

(async () => {
    const browser = await browserDrive.launch({
        headless: false,
        userDataDir: 'data'
    })
    
    const page = await browser.newPage()
    await page.goto('https://m.facebook.com/events/calendar/birthdays/' ,
    {waitUntil: 'networkidle2'})
    await page.waitFor('textarea[name="message"]')
    await page.type('textarea[name="message"]', sorteio(), {delay: 50})
    await page.click('button[type="submit"]')
    await page.waitFor(4000)
    await browser.close()

})()