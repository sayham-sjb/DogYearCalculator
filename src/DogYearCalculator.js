function HumanDogYears(form) {
    var HumanYears = form.inYears.value;
    if (HumanYears >= 21) {
        dy = (HumanYears - 21) / 4 + 2;
    } else {
        dy = HumanYears / 10.5;
    }
    var hdy = 0;
    if (HumanYears >= 2) {
        hdy = 21 + ((HumanYears - 2) * 4);
    } else {
        hdy = HumanYears * 10.5;
    }
    form.DogYears.value = Math.round(dy * 100) / 100;
    form.HumanYears.value = Math.round(hdy * 100) / 100;
}