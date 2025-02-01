
document.addEventListener("DOMContentLoaded", function() {
    const toggleImage = document.getElementById("toggleImage");
    const toggleText1 = document.getElementById("toggleText1");
    const toggleText2 = document.getElementById("toggleText2");
    const toggleButton = document.getElementById("toggleButton");
    const resetButton = document.getElementById("resetButton");

    const images = [
        "url(./html/IMG_52493.png)",
        "url(./html/opo.png)",
        "url(./html/hleb.png)"
    ];
    const texts1 = ["Historia stworzenia rodzinnej restauracji o nazwie „Ukraińska Knajpa” zaczęła się od prostego, ale ważnego pragnienia – zachowania i popularyzacji ukraińskich tradycji gościnności oraz kuchni. Nasza rodzina postanowiła otworzyć miejsce, gdzie każdy mógłby poczuć ciepło domowego ogniska, skosztować smacznych potraw ukraińskiej kuchni i poznać nasze tradycje.",
         "Cała rodzina była zaangażowana w pracę i rozwój lokalu. Nazwę wybraliśmy nieprzypadkowo: „knajpa” w ukraińskiej tradycji oznacza nie tylko miejsce do jedzenia i picia, ale także symbol gościnności, gdzie zawsze ciepło przyjmowani są goście.",
          "Ukraińska Knajpa” szybko zdobyła popularność wśród mieszkańców i turystów. Jej goście nie tylko rozkoszowali się potrawami, ale także poznawali historię i kulturę Ukrainy. Restauracja stała się miejscem, gdzie spotykali się starzy przyjaciele, gdzie obchodzono rodzinne święta, a dla wielu obcokrajowców – sposobnością, by poznać Ukrainę poprzez jej pyszną kuchnię i ciepłą atmosferę."];
    const texts2 = ["Ukraińska kuchnia ma duży potencjał do popularyzacji poza granicami swojej ojczyzny. Zdecydowaliśmy, że do tego celu trzeba nie tylko otworzyć restaurację, ale także stworzyć atmosferę, która oddawałaby ducha prawdziwej ukraińskiej knajpy – miejsca, gdzie jest wygodnie i przytulnie, gdzie można spotkać się z przyjaciółmi lub rodziną i spędzić czas na szczerych rozmowach, delektując się domowymi potrawami.",
         "Od samego początku nasza rodzina zdecydowała się kłaść nacisk na prawdziwą, autentyczną ukraińską kuchnię, wykorzystując lokalne produkty i tradycyjne przepisy. Dania, które serwowaliśmy, to m.in. barszcz z pampuchami, pierogi z różnymi nadzieniami, smażona wieprzowina z ziemniakami oraz, oczywiście, domowe kiszonki i „bogate” zakąski.",
          "Wielkie znaczenie miał także wystrój. Ściany restauracji zdobią malowidła petrykiwskie, haftowane ręczniki, drewniane meble, co tworzyło atmosferę prawdziwej ukraińskiej chaty. I oto już kilka lat po otwarciu „Ukraińska knajpa” stała się prawdziwym centrum kulturowym, gdzie każdy może poczuć się częścią wielkiej ukraińskiej rodziny."];
    const buttonTexts = ["1", "2", ""];
    const buttonTexts2 = ["0", "1", "2"];

    let currentIndex = 0;

    function changeContent() {
        currentIndex = (currentIndex + 1) % images.length;
        toggleImage.style.backgroundImage = images[currentIndex];
        toggleText1.textContent = texts1[currentIndex];
        toggleText2.textContent = texts2[currentIndex];
        toggleButton.textContent = buttonTexts[currentIndex];
        resetButton.textContent = buttonTexts2[currentIndex];
    }

    function resetContent() {
        currentIndex = (currentIndex - 1) % images.length;;
        toggleImage.style.backgroundImage = images[currentIndex];
        toggleText1.textContent = texts1[currentIndex];
        toggleText2.textContent = texts2[currentIndex];
        toggleButton.textContent = buttonTexts[currentIndex];
        resetButton.textContent = buttonTexts2[currentIndex];
    }

    toggleButton.addEventListener("click", changeContent);
    resetButton.addEventListener("click", resetContent);


});
