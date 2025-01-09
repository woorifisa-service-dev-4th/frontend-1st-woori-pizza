const name_arr = [
    [
        "구본훈",
        "김승호",
        "김소민",
        "김성준",
        "윤영찬",
        "김새봄",
        "권지윤",
        "권민지",
    ],
    [
        "서용준",
        "배승혁",
        "박찬진",
        "마서영",
        "노영재",
        "남승현",
        "김지연",
        "이정민",
    ],
    [
        "이서연",
        "윤태경",
        "윤예진",
        "윤선영",
        "유승한",
        "여은동",
        "신희원",
        "서채연",
    ],
    [
        "조현식",
        "조윤주",
        "임지섭",
        "이현경",
        "이한비",
        "이원빈",
        "이승준",
        "이소연",
    ],
    [
        "황혜영",
        "황유환",
        "허연규",
        "차승훈"
]
];

checkLine = (num) => {
    switch(num) {
        case 1:
            return "first_line";
        case 2:
            return "second_line";
        case 3:
            return "third_line";
        case 4:
            return "fourth_line";
        case 5:
            return "fifth_line";
        default:
            return;
    }
};

window.onload = () => {
    const seat_section = document.getElementById("seat-section");
    let line;
    let leftTable;
    let rightTable;
    let seat;
    let pizza;
    let name_tag;
    let name_area;

    for (let i = 0; i < 5; i++) {
        line = document.createElement('div');
        line.setAttribute('class', 'line');
        line.setAttribute('id', checkLine(i + 1));

        leftTable = document.createElement('div');
        rightTable = document.createElement('div');
        leftTable.setAttribute('class', 'leftTable');
        rightTable.setAttribute('class', 'rightTable');

        for (let index = 0; index < name_arr[i].length; index++) {
            seat = document.createElement('div');
            seat.setAttribute('class', 'seat');

            pizza = document.createElement('img');
            pizza.setAttribute('class', 'pizza_box');
            pizza.setAttribute('src', 'images/pizza_box.png');
            pizza.setAttribute('alt', 'closed pizza box');

            name_area = document.createElement('div');
            name_area.setAttribute('class', 'name_area');

            name_tag = document.createElement('div');
            name_tag.setAttribute('class', 'name_tag');
            name_tag.innerText = name_arr[i][index];

            name_area.appendChild(name_tag);
            seat.appendChild(pizza);
            seat.appendChild(name_area);

            if (index < name_arr[i].length / 2) {
                leftTable.appendChild(seat);
            } else {
                rightTable.appendChild(seat);
            }
        }

        line.appendChild(leftTable);

        if (i == 4) {
            const desk_bell = document.createElement('div');
            desk_bell.setAttribute('class', 'desk_bell');
            line.appendChild(desk_bell);
        }

        line.appendChild(rightTable);
        seat_section.appendChild(line);
    }
};