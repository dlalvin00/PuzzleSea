document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll('.color');
    const columns = document.querySelectorAll('.column');
    
    let score = 0;

    colors.forEach(color => {
      color.addEventListener('dragstart', dragStart);
      color.addEventListener('dragend', dragEnd);
    });

    columns.forEach(column => {
      column.addEventListener('dragover', dragOver);
       column.addEventListener('dragenter', dragEnter);
      column.addEventListener('dragleave', dragLeave);
      column.addEventListener('drop', drop);
    });

    let draggedColor = null;

    function dragStart() {
      draggedColor = this;
      setTimeout(() => (this.style.display = 'none'), 0);
    }

    function dragEnd() {
      //draggedColor = null;
      setTimeout(() => (this.style.display = 'block'), 0);
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();
     // this.style.border = '2px dashed black';
    }

    function dragLeave() {
      this.style.border = '2px solid black';
    }

    function drop() {
      if (draggedColor) {
        this.appendChild(draggedColor);
        //this.style.backgroundColor = 'red';
        const colorId = draggedColor.id;
        //const columnId = this.id;
        const secondClass = this.classList.item(1);
        if (colorId === secondClass) {
          this.style.backgroundColor = secondClass;
          score += 10;
          document.getElementById("score").innerText = "Pontuação: " + score;
        } else {
            const colorsContainer = document.getElementById("colors-container");
            colorsContainer.appendChild(draggedColor); // Retorna o elemento à sua posição original
        }
      }
      
    }
});
