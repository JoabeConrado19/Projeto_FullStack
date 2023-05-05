set -0 errexit

npm
npm build
npx prisma migrate dev
