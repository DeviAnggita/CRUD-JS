<?php require 'tampilan/header.php'; ?>
<?php $pagename = "Form Data Buku"; ?>

<div class="container pt-md-5 pt-3 pb-3">
    <div class="row">
        <div class="col-md-6">
            <img src="tampilan/Book.png" alt="Home Image" class="img-fluid">
        </div>
        <div class="col-md-6 pl-md-5 pr-md-5 my-auto border-left overflow-auto my-form-container" style="height: 500px;">

            <body>
                <h1>
                    <center>Tambah Data Buku</center>
                </h1>
                <hr>
                <div class="barang-form">
                    <form onsubmit="event.preventDefault();onFormSubmit();">
                        <div>
                            <label><b>Kode Buku</b></label><label class="validation-error hide" id="fullNameValidationError"></label>
                            <input type="text" class="form-control" name="KodeBuku" id="KodeBuku" required>
                        </div>
                        <br/>
                        <div>
                            <label><b>Judul Buku</b></label>
                            <input type="text" class="form-control" name="JudulBuku" id="JudulBuku" required>
                        </div>
                        <br/>
                        <div>
                            <label><b>Penerbit</b></label>
                            <input type="text" class="form-control" name="Penerbit" id="Penerbit" required>
                        </div>
                        <br/>
                        <div>
                            <label><b>Tahun Terbit</b></label>
                            <input type="number" class="form-control" name="TahunTerbit" id="TahunTerbit" required>
                        </div>
                        <br/>
                        <div>
                            <label><b>Jumlah Buku</b></label>
                            <input type="number" class="form-control" name="JumlahBuku" id="JumlahBuku" required>
                        </div>
                        <br/>
                        <div>
                            <label><b>Harga Buku</b></label>
                            <input type="text" class="form-control" name="HargaBuku" id="HargaBuku" required>
                        </div>
                        <br/>
                        <div class="form-action-buttons">
                            <input class="btn btn-success" type="submit" value="Submit">
                        </div>
                    </form>
                </div>
                <br/>
            </div>
        <div class="barang-table">
            <table class="table table-bordered" id="barangList">
                <thead>
                    <tr>
                        <th style="text-align: center;">Kode Buku</th>
                        <th style="text-align: center;">Judul Barang</th>
                        <th style="text-align: center;">Penerbit</th>
                        <th style="text-align: center;">Tahun Terbit</th>
                        <th style="text-align: center;">Jumlah Buku</th>
                        <th style="text-align: center;">Harga Buku</th>
                        <th style="text-align: center;">Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <script src="script.js"></script>
        </body>
    </div>
</div>

<?php require 'tampilan/footer.php'; ?>