package kr.hs.dgsw.board_back.Domain;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostMapper {

    public List findAll();

    public Post findById(Long id);

    public List findByUserId(Long user_id);

    public Long add(Post post);

    public int modify(Post post);

    public int deleteById(Long id);

}
