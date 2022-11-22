CREATE TABLE IF NOT EXISTS public.posts
(
    wallet_id text COLLATE pg_catalog."default" NOT NULL,
    cid text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT posts_pkey PRIMARY KEY (wallet_id, cid)
)
