var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["KodeBuku"] = document.getElementById("KodeBuku").value;
    formData["JudulBuku"] = document.getElementById("JudulBuku").value;
    formData["Penerbit"] = document.getElementById("Penerbit").value;
    formData["TahunTerbit"] = document.getElementById("TahunTerbit").value;
    formData["JumlahBuku"] = document.getElementById("JumlahBuku").value;
    formData["HargaBuku"] = document.getElementById("HargaBuku").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("barangList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.KodeBuku;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.JudulBuku;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Penerbit;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.TahunTerbit;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.JumlahBuku;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.HargaBuku;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button type="button" class="btn btn-primary" onClick="onEdit(this)">Edit</button>
    <button type="button" class="btn btn-danger" onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("KodeBuku").value = "";
    document.getElementById("JudulBuku").value = "";
    document.getElementById("Penerbit").value = "";
    document.getElementById("TahunTerbit").value = "";
    document.getElementById("JumlahBuku").value = "";
    document.getElementById("HargaBuku").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("KodeBuku").value = selectedRow.cells[0].innerHTML;
    document.getElementById("JudulBuku").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Penerbit").value = selectedRow.cells[2].innerHTML;
    document.getElementById("TahunTerbit").value = selectedRow.cells[3].innerHTML;
    document.getElementById("JumlahBuku").value = selectedRow.cells[4].innerHTML;
    document.getElementById("HargaBuku").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.KodeBuku;
    selectedRow.cells[1].innerHTML = formData.JudulBuku;
    selectedRow.cells[2].innerHTML = formData.Penerbit;
    selectedRow.cells[3].innerHTML = formData.TahunTerbit;
    selectedRow.cells[4].innerHTML = formData.JumlahBuku;
    selectedRow.cells[5].innerHTML = formData.HargaBuku;
}

function onDelete(td) {
    if (confirm('Apakah kamu yakin ingin menghapus data ini?')) {
        row = td.parentElement.parentElement;
        document.getElementById("barangList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("KodeBuku").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

var rupiah = document.getElementById('HargaBuku');
rupiah.addEventListener('keyup', function(e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    rupiah.value = formatRupiah(this.value, 'Rp. ');
});

function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}