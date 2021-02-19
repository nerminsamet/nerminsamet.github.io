function toggleBib(bibId)
{
    var bib = document.getElementById(bibId);
    if (bib.style.display == 'none') {
        bib.style.display = 'block';
    } else {
        bib.style.display = 'none';
    }
}
