document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll('.elips');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const texts1 = ["Wania Kozłow",
         "Sergey Konar",
          "Catherine Milton", 
          "Bozhena Lukyanenko"];
    const texts2 = ["Bardzo smaczne, podobało nam się, atmosfera Ukrainy jest bardzo piękna. Zamówiliśmy barszcz bardzo smaczny. Zamówiłem więcej wermiszel z kurczakiem bardzo smaczne podobało nam się to wszystko bardzo domowej roboty. Przyjdź z takim sitem, aby zjeść barszcz lub zupę, a następnie zamówić!",
         "Jedzenie jest bardzo smaczne. Polecam barszcz z kwaśną śmietaną i mięsem oraz naleśniki. Ludzi było tak dużo, że brakowało miejsca. Najprawdopodobniej świadczy to o popularności tego miejsca. Ale obsługa mogłaby być trochę lepsza.", 
         "Znajduje się w samym centrum, więc będzie trochę trudno znaleźć miejsce z parkiem. Wszystko bardzo nam się podobało. Przychodziliśmy do tego miejsca regularnie. Jedzenie jest pyszne, jest wybór, asortyment dań. Nasze ulubione dania to pierogi z wiśniami, barszcz i draniki.",
          "Dla nas, Ukraińców, jest to bardzo przytulne miejsce. Obsługa jest na wysokim poziomie, zamówienie jest podawane szybko, a co najważniejsze, rozumieją cię. Jedzenie jest bardzo smaczne. Zupa grzybowa przeszła nasze najśmielsze oczekiwania. To po prostu bomba."];
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const texts3 = ["Jane Sweet", 
        "Jarosław Kryżanowski",
         "Vika Krivosheeva",
          "Karina Bilyak"];
    const texts4 = ["Nastrojowa, przytulna kawiarnia. Można poczuć się jak w domu. Miła, uprzejma i przyjazna obsługa. Wszystko bardzo smaczne i szybko podane. Zamówiliśmy barszcz, smalec, rosół z kury, tłuczone ziemniaki z klopsikami, pstrąga i serniki",
         "Miejsce jest idealne, cena dobra, porcje dla 10+ są ogromne, zapytaj miłą i piękną dziewczynę co zamówić jeśli nie dasz rady zjeść tego co zamówiłeś, mogą Ci to zapakować. Szczególnie polecam barszcz ukraiński, robi furorę.",
          "Bardzo lubię tutejszy barszcz. Chyba jeden z najsmaczniejszych jakie jadłem nie tylko w Polsce, ale i w Ukrainie. Restauracja serwuje mielony boczek z czosnkiem, który również jest niesamowicie smaczny. Należy jednak pamiętać, że zamawiając barszcz z dostawą, nie dodają smalcu.",
           "Bardzo podobało mi się to miejsce. Szybka obsługa, przytulna atmosfera z ukraińską muzyką i pyszny barszcz) Znalazłem tę restaurację na mapach Google i nie żałowałem, że tam wszedłem."];
    let currentIndex = 0;

    dots.forEach((elips, index) => {
        elips.addEventListener('click', function() {
            // Знімаємо активний клас з усіх кружочків
            dots.forEach(d => d.classList.remove('active'));
            // Додаємо активний клас до натиснутого кружочка
            elips.classList.add('active');
            // Змінюємо тексти
            text1.textContent = texts1[index];
            text2.textContent = texts2[index];
            text3.textContent = texts3[index];
            text4.textContent = texts4[index];
        });
    });
});



