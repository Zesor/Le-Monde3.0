CREATE TABLE IF NOT EXISTS public.posts
(
    wallet_id text COLLATE pg_catalog."default" NOT NULL,
    cid text COLLATE pg_catalog."default" NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT posts_pkey PRIMARY KEY (wallet_id, cid)
);

CREATE TABLE IF NOT EXISTS public."user"
(
    wallet_id text COLLATE pg_catalog."default" NOT NULL,
    logged_in boolean NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (wallet_id)
);