- example.env -> .env

* .env파일 작성
  DATABASE_USERNAME=root
  DATABASE_PASSWORD=
  DATABASE_NAME='setflix' -> mysql 데이터베이스 생성
  ACCESS_SECRET=code (jwt토큰)
  API='656e4baf4a63913cd93198a95419a5e6' (movie api키)

- migrations
  npx sequelize-cli db:migrate
  마이그래이션 후 mysql movies table description varcha(1000)으로 변경해주기
  npx sequelize-cli db:seed:all
