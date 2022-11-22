CREATE TABLE IF NOT EXISTS public."user"
(
    wallet_id text COLLATE pg_catalog."default" NOT NULL,
    logged_in boolean NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (wallet_id)
)
