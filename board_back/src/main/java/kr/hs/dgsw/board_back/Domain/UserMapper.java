package kr.hs.dgsw.board_back.Domain;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    public List findAll();

    public User findById(Long id);

    public int modify(User user);

    public Long add(User user);

    public int deleteById(Long id);

}
