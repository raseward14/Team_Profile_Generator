
const generateHTML = (roster) => {
    // build manager card
    const createManager = (manager) => {
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getOfficeNumber();
        manager.getRole();
        // bootstrap card- template literal- push to array
        `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">${manager.getName()}</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        `
    }
    // build intern card
    const createIntern = (intern) => {
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getSchool();
        intern.getRole();
        // bootstrap card- template literal- push to array
        `
        <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        `
    }
    // build engineer card
    const createEngineer = (engineer) => {
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getGithub();
        engineer.getRole();
        // bootstrap card- temlate literal- push to array
        `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        `
    }

// filter out diff roles
// .map calls the three functions above
cardArray = [];

// filter to get mgr, intern, engineer to push cards to this array
cardArray.push(roster.filter(employee => Employee.getRole() === 'Manager').map(newManager => createManager(newManager).join('')));
cardArray.push(roster.filter(employee => Employee.getRole() === 'Intern').map(newIntern => createIntern(newIntern).join('')));
cardArray.push(roster.filter(employee => Employee.getRole() === 'Engineer').map(newEngineer => createEngineer(newEngineer).join('')));

// .join('')
return cardArray.join('');
}

module.exports = roster => {
    `<!doctype html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

        <!-- my stylesheet -->
        <link rel="stylesheet" href="src/css/style.css">

        <title>Team Profile Generator!</title>
    </head>
    <body>
        <h1>My Team</h1>
        <div class="portfolio-container">
            <div class="project-row">
            ${generateHTML(roster)}
            </div>
        </div>

        <!-- Optional JavaScript; choose one of the two! -->

        <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
        -->
    </body>
    </html>
    `
};