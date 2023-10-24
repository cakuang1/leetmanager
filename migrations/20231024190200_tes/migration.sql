-- AlterTable
CREATE SEQUENCE userquestions_id_seq;
ALTER TABLE "UserQuestions" ALTER COLUMN "id" SET DEFAULT nextval('userquestions_id_seq');
ALTER SEQUENCE userquestions_id_seq OWNED BY "UserQuestions"."id";
