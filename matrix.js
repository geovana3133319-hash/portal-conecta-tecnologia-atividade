//<link rel="stylesheet" href="..."></link>//

 const canvas = document.getElementById('matrix-fundo');
        const ctx = canvas.getContext('2d');

        // Ajusta o tamanho da tela de fundo automaticamente
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Caracteres em japonês (Katakana) para o efeito de terminal
        const letras = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function desenharMatrix() {
            // Cria um rasto suave escuro à medida que as letras descem
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00FF66'; // Cor verde brilhante de terminal
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const texto = letras.charAt(Math.floor(Math.random() * letras.length));
                ctx.fillText(texto, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        // Velocidade da queda
        setInterval(desenharMatrix, 33);