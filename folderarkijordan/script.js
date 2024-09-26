angular.module('ajs', [])
    .controller('ExCtrl', function($scope) {
        // Preguntas basadas en las características de los Bulls 1995-96
        $scope.questions = [
            { "key": "titular", "texte": "¿Es un jugador del quinteto inicial?" },
            { "key": "guardia", "texte": "¿Juega como guardia?" },
            { "key": "alero", "texte": "¿Es un alero?" },
            { "key": "pivot", "texte": "¿Juega como pívot?" },
            { "key": "defensivo", "texte": "¿Es famoso por su defensa?" },
            { "key": "triplero", "texte": "¿Es conocido por sus tiros de 3 puntos?" },
            { "key": "altura", "texte": "¿Es más alto de 2 metros?" },
            { "key": "allStar", "texte": "¿Participó en el All-Star Game?" },
            { "key": "rebotero", "texte": "¿Es conocido por sus habilidades para capturar rebotes?" },
            { "key": "lider", "texte": "¿Es uno de los líderes del equipo?" }
        ];

        $scope.persons = [
            {
                "titular": 1,
                "guardia": 1,
                "defensivo": 1,
                "triplero": 0,
                "allStar": 1,
                "altura": 1,
                "nom": "Michael Jordan",
                "desc": "El mejor jugador de baloncesto de todos los tiempos, conocido por su habilidad ofensiva y defensiva.",
                "url": "imagenes/bulls 95-96/Jordan.jpg"
            },
            {
                "titular": 1,
                "alero": 1,
                "defensivo": 1,
                "triplero": 0,
                "allStar": 1,
                "altura": 1,
                "lider": 1,
                "nom": "Scottie Pippen",
                "desc": "Jugador clave de los Bulls, excelente defensor y líder junto a Jordan.",
                "url": "imagenes/bulls 95-96/Pippen.jpg"
            },
            {
                "titular": 1,
                "pivot": 1,
                "defensivo": 1,
                "altura": 1,
                "rebotero": 1,
                "triplero": 0,
                "allStar": 0,
                "nom": "Dennis Rodman",
                "desc": "Uno de los mejores reboteadores y defensores en la historia de la NBA.",
                "url": "imagenes/bulls 95-96/Rodman.jpg"
            },
            {
                "titular": 1,
                "guardia": 1,
                "defensivo": 0,
                "triplero": 1,
                "allStar": 0,
                "altura": 0,
                "nom": "Steve Kerr",
                "desc": "Especialista en triples, fundamental en los momentos clave.",
                "url": "imagenes/bulls 95-96/Kerr.jpg"
            },
            {
                "titular": 1,
                "pivot": 1,
                "defensivo": 1,
                "altura": 1,
                "allStar": 0,
                "rebotero": 1,
                "nom": "Luc Longley",
                "desc": "Pívot de gran altura, clave en defensa y en la captura de rebotes.",
                "url": "imagenes/bulls 95-96/Luc_Longley.jpg"
            },
            {
                "titular": 0,
                "guardia": 1,
                "defensivo": 1,
                "triplero": 0,
                "altura": 0,
                "allStar": 0,
                "nom": "Ron Harper",
                "desc": "Base veterano, excelente defensor y líder en la cancha.",
                "url": "imagenes/bulls 95-96/Harper.jpg"
            },
            {
                "titular": 0,
                "alero": 1,
                "defensivo": 0,
                "triplero": 1,
                "altura": 1,
                "allStar": 0,
                "nom": "Toni Kukoč",
                "desc": "Jugador versátil, conocido por su tiro exterior y capacidad para jugar en varias posiciones.",
                "url": "imagenes/bulls 95-96/Toni_Kukoc.jpg"
            },
            {
                "titular": 0,
                "pivot": 1,
                "defensivo": 1,
                "altura": 1,
                "rebotero": 1,
                "allStar": 0,
                "nom": "Bill Wennington",
                "desc": "Pívot suplente, sólido en defensa y captura de rebotes.",
                "url": "imagenes/bulls 95-96/Bill_Wennington_(crop).jpg"
            },
            {
                "titular": 0,
                "guardia": 1,
                "defensivo": 0,
                "triplero": 0,
                "altura": 0,
                "allStar": 0,
                "nom": "Jud Buechler",
                "desc": "Escolta-alero suplente, buen tirador y jugador de equipo.",
                "url": "imagenes/bulls 95-96/Buechler.jpg"
            },
            {
                "titular": 0,
                "guardia": 1,
                "defensivo": 1,
                "triplero": 0,
                "altura": 0,
                "allStar": 0,
                "nom": "Randy Brown",
                "desc": "Escolta suplente, conocido por su velocidad y energía defensiva.",
                "url": "imagenes/bulls 95-96/Randy.jpg"
            },
            {
                "titular": 0,
                "pivot": 1,
                "defensivo": 1,
                "altura": 1,
                "allStar": 0,
                "rebotero": 1,
                "nom": "James Edwards",
                "desc": "Veterano pívot, conocido por su presencia en la pintura y su experiencia.",
                "url": "imagenes/bulls 95-96/Edwards.jpg"
            },
            {
                "titular": 0,
                "pivot": 1,
                "defensivo": 1,
                "altura": 1,
                "allStar": 0,
                "rebotero": 1,
                "nom": "John Salley",
                "desc": "Pívot veterano, conocido por su defensa y su experiencia en playoffs.",
                "url": "imagenes/bulls 95-96/John_Salley.jpg"
            }
        ];

        // Control del flujo del juego
        $scope.num = 1;
        $scope.menu = true;
        $scope.questionMode = false;
        $scope.resultMode = false;
        $scope.erreurMode = false;

        $scope.play = function() {
            $scope.menu = false;
            $scope.questionMode = true;
            $scope.num = 1;
            $scope.answers = {}; // Reiniciar respuestas
            $scope.question = $scope.questions[$scope.num - 1];
        };

        $scope.yes = function() {
            nextQuestion("yes");
        };

        $scope.no = function() {
            nextQuestion("no");
        };

        $scope.maybe = function() {
            nextQuestion("maybe");
        };

        // Función para avanzar en las preguntas
        function nextQuestion(response) {
            $scope.answers[$scope.questions[$scope.num - 1].key] = response;

            if ($scope.num < $scope.questions.length) {
                $scope.num++;
                $scope.question = $scope.questions[$scope.num - 1];
            } else {
                guessCharacter();
            }
        }

        // Función para adivinar el jugador
        function guessCharacter() {
            let bestMatch = null;
            let highestScore = -1;

            $scope.persons.forEach(player => {
                let score = 0;
                Object.keys($scope.answers).forEach(key => {
                    if ($scope.answers[key] === "yes" && player[key] === 1) {
                        score++;
                    } else if ($scope.answers[key] === "no" && player[key] === 0) {
                        score++;
                    }
                });

                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = player;
                }
            });

            if (bestMatch) {
                $scope.person = bestMatch;
                $scope.resultMode = true;
            } else {
                $scope.erreurMode = true;
            }

            $scope.questionMode = false;
        }

        $scope.replay = function() {
            $scope.menu = true;
            $scope.resultMode = false;
            $scope.erreurMode = false;
        };
    });
