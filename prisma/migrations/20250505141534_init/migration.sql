-- CreateTable
CREATE TABLE "Save" (
    "id" SERIAL NOT NULL,
    "userMail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "playerLevel" INTEGER NOT NULL,
    "money" INTEGER NOT NULL,

    CONSTRAINT "Save_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Object" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavePokemonLink" (
    "saveId" INTEGER NOT NULL,
    "pokemonId" INTEGER NOT NULL,

    CONSTRAINT "SavePokemonLink_pkey" PRIMARY KEY ("saveId","pokemonId")
);

-- CreateTable
CREATE TABLE "SaveObjectLink" (
    "saveId" INTEGER NOT NULL,
    "objectId" INTEGER NOT NULL,

    CONSTRAINT "SaveObjectLink_pkey" PRIMARY KEY ("saveId","objectId")
);

-- AddForeignKey
ALTER TABLE "SavePokemonLink" ADD CONSTRAINT "SavePokemonLink_saveId_fkey" FOREIGN KEY ("saveId") REFERENCES "Save"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavePokemonLink" ADD CONSTRAINT "SavePokemonLink_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaveObjectLink" ADD CONSTRAINT "SaveObjectLink_saveId_fkey" FOREIGN KEY ("saveId") REFERENCES "Save"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaveObjectLink" ADD CONSTRAINT "SaveObjectLink_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Object"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
